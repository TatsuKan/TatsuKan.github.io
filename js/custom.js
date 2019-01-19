$(document).ready(function() { 
  $("a.topLink").click(function() {
     $("html, body").animate({
        scrollTop: $($(this).attr("href")).offset().top + "px"
     }, {
        duration: 700,
        easing: "swing"
     });
     
     return false;
  });
  
  $('.slider').slick({
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2500,
    dots: true,
   //  fade: true
 });
});