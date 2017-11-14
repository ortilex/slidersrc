//<![CDATA[
// Side Menu issam weeb
(function() {
  window.Menu = (function() {
    Menu.init = function() {
      return $('[data-menu]').each(function(idx, el) {
        return new Menu($(el));
      });
    };

    function Menu($el) {
      this.nav = $el;
      this.menubtn = $('.menu-btn', this.nav);
      this.menubtn.on('click', (function(_this) {
        return function(ev) {
          _this.nav.toggleClass('active');
          return false;
        };
      })(this));
    }

    return Menu;

  })();

  $(function() {
    if ($('[data-menu]').length) {
      return Menu.init();
    }
  });

}).call(this);

//]]>
