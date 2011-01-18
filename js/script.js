/* Author: Peter Magenheimer
*/

$(document).ready(function(){
  $.localScroll({axis:'yx',queue:'true',hash:'true'});
  $('#test-slider').before('<ul class="slider-nav">').cycle({
    fx: 'fade',
    timeout: 0,
    pager: ".slider-nav",

    // callback fn that creates a thumbnail to use as pager anchor 
    pagerAnchorBuilder: function(idx, slide) { 
      return '<li><a href="#"><img src="' + slide.src + '" width="120" /></a></li>'; 
    } 
  });
});
























