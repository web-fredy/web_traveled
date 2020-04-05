function plugin_home() {
  (function($) {
    "use strict";
    var $navbar = $(".myMenu"), y_pos = $navbar.offset().top, height = $navbar.height();

    $(document).scroll(function() {
        var scrollTop = $(this).scrollTop();
        if (scrollTop > 0) {
          $navbar.addClass("sticky");
        } else {
          $navbar.removeClass("sticky");
        }
    });
  })(jQuery, undefined);

  $(".btn-menu").click(function(){
    $("#myMenu").toggleClass("open");
  });
}
