/* Author: Peter Magenheimer
*/

$(document).ready(function(){
  $.localScroll({axis:'yx',queue:'true',hash:'true'});
  $('#test-slider').cycle({
    fx: 'scrollHorz',
    timeout: 0,
    next: 'a.slider-next'
  });
});

// $(function() {
//   $('#slider').cycle('scrollUp');
// }
// 
























