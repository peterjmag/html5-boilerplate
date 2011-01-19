/* Author: Peter Magenheimer
*/

$(document).ready(function(){
  $.localScroll({axis:'yx',queue:'true',hash:'true'});

  $('.slides').each(function() {
    var p = this.parentNode;

    $(this).before('<ul class="slides-nav">').cycle({
      fx: 'fade',
      timeout: 0,
      next: $(".slides", p),
      pager: $(".slides-nav", p),
      activePagerClass: 'active-slide',

      // callback fn that creates a thumbnail to use as pager anchor
      pagerAnchorBuilder: function(idx, slide) {
        return '<li><a href="#"><img src="' + slide.src + '" width="140" /></a></li>';
      }
    });
  })
});
























