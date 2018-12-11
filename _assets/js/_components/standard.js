///////////////////////////////////////
//      smooth-scrolling - http://css-tricks.com/snippets/jquery/smooth-scrolling/
///////////////////////////////////////
// also includes an exception to the specific scroll behaviour below
$(function() {
  $('a[href*=\\#]:not([href=\\#])').click(function() {
    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname && !($(this).hasClass('js-small-section-scroll'))) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
});

// a very specific scroll behaviour for the small cities in each guide. It basically stops the page nav from overlapping the content when it scrolls to that content.
$('.js-small-section-scroll').on('click', function(e) {
  e.preventDefault();
  var navHeight = $(this).height();
  var targetId = $(this).attr('href').split('#').pop();
  var targetScrollPosition = $('#' + targetId).offset().top;
  var peanutclusters = targetScrollPosition - navHeight;
  $('html,body').animate({
    scrollTop: peanutclusters
  }, 500);
  return false;
})


///////////////////////////////////////
//      inserts current year
///////////////////////////////////////
$('.js-year').html(new Date().getFullYear());


///////////////////////////////////////
//      detects touch device
///////////////////////////////////////
if ("ontouchstart" in document.documentElement){
  $('html').addClass('touch');
} else {
  $('html').addClass('no-touch');
}


///////////////////////////////////////
//        Navigation
///////////////////////////////////////

// mobile nav toggle open & close
$('.js-toggle-mobile-nav').on('click', function(e) {
  $('.mobile-nav').toggleClass('is-open').toggleClass('is-closed');
});


///////////////////////////////////////
//   query string searcher
///////////////////////////////////////

// searches for specific queryString, returns value or true if empty value
function getQueryStringByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return true;
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}