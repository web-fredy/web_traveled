function plugin_home() {
  (function($) {
    "use strict";
  
    // Back to top button
    // $(window).scroll(function() {
    //   if ($(this).scrollTop() > 100) {
    //     $('.back-to-top').fadeIn('slow');
    //   } else {
    //     $('.back-to-top').fadeOut('slow');
    //   }
    // });
    // $('.back-to-top').click(function() {
    //   $('html, body').animate({
    //     scrollTop: 0
    //   }, 1500, 'easeInOutExpo');
    //   return false;
    // });
  
    // Navbar scroll class
    $(window).scroll(function() {
      if ($(this).scrollTop() > 80) {
        $('#navbar').addClass('gradient');

        // $('#navbar').addClass('navbar-dark');
      } else {
        $('#navbar').removeClass('gradient');
        
        // $('#navbar').removeClass('navbar-dark');
      }
    });
  
    if ($(window).scrollTop() > 80) {
      $('#navbar').addClass('gradient');
    }
    
    // Hamburguer menu
    var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};
  
    var hamburgers = document.querySelectorAll(".hamburger");
    if (hamburgers.length > 0) {
      forEach(hamburgers, function(hamburger) {
        hamburger.addEventListener("click", function() {
          this.classList.toggle("is-active");
        }, false);
      });
    }
  })(jQuery);
}
