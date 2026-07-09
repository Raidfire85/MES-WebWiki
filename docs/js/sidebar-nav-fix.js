jQuery(function ($) {
  var nav = SphinxRtdTheme.Navigation;

  nav.reset = function () {
    var hash = encodeURI(window.location.hash) || '#';
    try {
      var menu = $('.wy-menu-vertical');
      var link = menu.find('[href="' + hash + '"]');

      if (link.length === 0) {
        var section = $('.document [id="' + hash.substring(1) + '"]').closest('div.section');
        link = menu.find('[href="#' + section.attr('id') + '"]');
        if (link.length === 0) {
          link = menu.find('li.current > a[href="#"], a.current[href="#"]');
        }
      }

      if (link.length > 0) {
        $('.wy-menu-vertical .current')
          .removeClass('current')
          .attr('aria-expanded', 'false');
        link.addClass('current').attr('aria-expanded', 'true');
        link.closest('li.toctree-l1').parent().addClass('current').attr('aria-expanded', 'true');
        for (var i = 1; i <= 10; i++) {
          link.closest('li.toctree-l' + i).addClass('current').attr('aria-expanded', 'true');
        }

        var sidebar = document.querySelector('.wy-side-scroll');
        var saved = sessionStorage.getItem('mes-sidebar-scroll');

        if (saved !== null && sidebar) {
          sidebar.scrollTop = parseInt(saved, 10);
          sessionStorage.removeItem('mes-sidebar-scroll');
        } else if (link[0]) {
          link[0].scrollIntoView({ block: 'nearest', inline: 'nearest' });
        }
      }
    } catch (err) {
      console.log('Error expanding nav for anchor', err);
    }
  };

  $(document).on('click', '.wy-menu-vertical a[href]', function () {
    var href = $(this).attr('href');
    if (href && href !== '#' && !href.startsWith('#')) {
      var sidebar = document.querySelector('.wy-side-scroll');
      if (sidebar) {
        sessionStorage.setItem('mes-sidebar-scroll', String(sidebar.scrollTop));
      }
    }
  });
});
