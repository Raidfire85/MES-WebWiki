(function () {
  'use strict';

  var SIDEBAR_SCROLL_KEY = 'mes-sidebar-scroll';

  function getSidebar() {
    return document.querySelector('.wy-side-scroll');
  }

  function saveSidebarScroll() {
    var sidebar = getSidebar();
    if (sidebar) {
      sessionStorage.setItem(SIDEBAR_SCROLL_KEY, String(sidebar.scrollTop));
    }
  }

  function restoreSidebarScroll() {
    var sidebar = getSidebar();
    var saved = sessionStorage.getItem(SIDEBAR_SCROLL_KEY);
    if (sidebar && saved !== null) {
      sidebar.scrollTop = parseInt(saved, 10);
    }
  }

  function scheduleRestore() {
    restoreSidebarScroll();
    requestAnimationFrame(restoreSidebarScroll);
    setTimeout(restoreSidebarScroll, 0);
    setTimeout(restoreSidebarScroll, 50);
    setTimeout(restoreSidebarScroll, 150);
  }

  // Save before theme click handlers run.
  document.addEventListener(
    'mousedown',
    function (event) {
      if (event.target.closest('.wy-menu-vertical a[href]')) {
        saveSidebarScroll();
      }
    },
    true
  );

  // Block any scrollIntoView inside the sidebar (theme, focus, etc.).
  var nativeScrollIntoView = Element.prototype.scrollIntoView;
  Element.prototype.scrollIntoView = function (arg) {
    if (this.closest && this.closest('.wy-side-scroll')) {
      return;
    }
    return nativeScrollIntoView.call(this, arg);
  };

  function markCurrentNavLink() {
    var hash = encodeURI(window.location.hash) || '#';
    var menu = window.jQuery ? jQuery('.wy-menu-vertical') : null;
    if (!menu || !menu.length) {
      return;
    }

    var link = menu.find('[href="' + hash + '"]');
    if (link.length === 0) {
      var section = jQuery('.document [id="' + hash.substring(1) + '"]').closest('div.section');
      link = menu.find('[href="#' + section.attr('id') + '"]');
      if (link.length === 0) {
        link = menu.find('li.current > a[href="#"], a.current[href="#"]');
      }
    }

    if (link.length === 0) {
      return;
    }

    jQuery('.wy-menu-vertical .current').removeClass('current').attr('aria-expanded', 'false');
    link.addClass('current').attr('aria-expanded', 'true');
    link.closest('li.toctree-l1').parent().addClass('current').attr('aria-expanded', 'true');
    for (var i = 1; i <= 10; i++) {
      link.closest('li.toctree-l' + i).addClass('current').attr('aria-expanded', 'true');
    }
  }

  function patchThemeNav() {
    var nav = window.SphinxRtdTheme && window.SphinxRtdTheme.Navigation;
    if (!nav || nav._mesSidebarPatched) {
      return !!nav;
    }

    nav._mesSidebarPatched = true;

    nav.onScroll = function () {
      this.winScroll = false;
    };

    nav.reset = function () {
      try {
        markCurrentNavLink();
      } catch (err) {
        console.log('Error expanding nav for anchor', err);
      }
      scheduleRestore();
    };

    // Replace enable so sticky sidebar scroll is never wired up.
    nav.enable = function () {
      if (this.isRunning) {
        scheduleRestore();
        return;
      }

      this.isRunning = true;
      var self = this;

      jQuery(function ($) {
        self.init($);
        self.reset();
        self.win.on('hashchange', function () {
          self.reset();
        });
        scheduleRestore();
      });
    };

    return true;
  }

  window.addEventListener('pageshow', scheduleRestore);

  if (!patchThemeNav()) {
    var attempts = 0;
    var timer = setInterval(function () {
      if (patchThemeNav() || ++attempts > 200) {
        clearInterval(timer);
      }
    }, 10);
  }

  if (window.jQuery) {
    jQuery(scheduleRestore);
  } else {
    document.addEventListener('DOMContentLoaded', scheduleRestore);
  }
})();
