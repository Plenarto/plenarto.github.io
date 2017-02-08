/* toggle menu on click */
$(document).ready(function(){
    $("#menu-icon").click(function(){
        $("#main-nav").slideToggle();
    });
});
/* menu shows on window resize */
$(window).resize(function(){
       if ($(window).width() > 1000) {
            $("#main-nav").show();
       }
       else {
            $("#main-nav").hide();
       }
});


/* SMOOTH SCROLL */
$(document).ready(function(){
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


/* BACK TO TOP BUTTON */

jQuery(document).ready(function() {
  var offset = 250;
  var duration = 300;
  jQuery(window).scroll(function() {
    if (jQuery(this).scrollTop() > offset) {
    jQuery(".back-to-top").fadeIn(duration);
    } else {
    jQuery(".back-to-top").fadeOut(duration);
    }
  });

  jQuery(".back-to-top").click(function(event) {
    event.preventDefault();
    jQuery("html, body").animate({scrollTop: 0}, duration);
    return false;
  })
});

/* IE smooth scroll bug fix */
if(navigator.userAgent.match(/MSIE 10/i) || navigator.userAgent.match(/Trident\/7\./) || navigator.userAgent.match(/Edge\/12\./)) {
    $('body').on("mousewheel", function () {
      event.preventDefault();
      var wd = event.wheelDelta;
      var csp = window.pageYOffset;
      window.scrollTo(0, csp - wd);
    });
  }
