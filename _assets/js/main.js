// general js for the project that wouldn't be a reuseable component


///////////////////////////////////////
//       Background overlay fade
///////////////////////////////////////

function overlay_bg(){
	var st = $(document).scrollTop();
	var wh = $(window).height();

  $('.js-bg-fade').each(function(){

    var distance = $(this).offset().top;
    var start = distance - wh;
    var progress = st - start;

    $(this).css({
      "background-color": "rgba(26,26,26,.7)",
      "opacity": st / wh + 0.15
    });

  });

}

$(document).scroll(function() {
	overlay_bg();
});