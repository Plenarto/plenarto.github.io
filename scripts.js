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


// show items on scroll
/* Every time the window is scrolled ... */
$(window).scroll( function(){
    /* Check the location of each desired element */
    $('.hideme').each( function(i){
        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        /* If the object is completely visible in the window, fade it in */
        if( bottom_of_window > bottom_of_object ){
            $(this).animate({'opacity':'1'},800);
        }
        /* If the object is completely invisible in the window, fade it out */
        if( bottom_of_window < bottom_of_object ){
            $(this).animate({'opacity':'0'},800);
        }
    });
});
