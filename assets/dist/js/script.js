new WOW().init();

$(window).scroll(function () {
  var sticky = $(".excel-trucking-header"),
    scroll = $(window).scrollTop();

  if (scroll >= 100) sticky.addClass("sticky-nav");
  else sticky.removeClass("sticky-nav");
});