// general js for the project that wouldn't be a reuseable component


///////////////////////////////////////
//       Background overlay fade
///////////////////////////////////////

function bgFade(){
	var scrollPosition = $(document).scrollTop();
	var windowHeight   = $(window).height();
  $('.js-bg-fade').each(function(){
    var targetScrollPosition = $(this).offset().top;
    var fadeStart = targetScrollPosition - windowHeight;
    var position = scrollPosition - fadeStart;
    // transition only happens when target section is at the bottom of the viewport
    if (position > 0) {
      $(this).css({
        "opacity": position / windowHeight + 0.15
      });
    }
  });

}

// run on page load
bgFade();
// run on page scroll
$(document).scroll(function() {
	bgFade();
});