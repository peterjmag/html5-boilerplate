/* Author: Peter Magenheimer
*/

$(document).ready(function(){
  $.localScroll({axis:'yx',queue:'true',hash:'true'});
  $('#test-slider').before('<ul class="slider-nav">').cycle({
    fx: 'fade',
    timeout: 0,
    next: "#test-slider",
    pager: ".slider-nav",
    activePagerClass: 'active-slide',

    // callback fn that creates a thumbnail to use as pager anchor
    pagerAnchorBuilder: function(idx, slide) {
      return '<li><a href="#"><img src="' + slide.src + '" width="140" /></a></li>';
    }
  });
});
























