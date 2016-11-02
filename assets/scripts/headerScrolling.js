var scrollTrue;
var lastScrollTop = 0;

$(window).scroll(function(event){
  scrollTrue = true;
});

setInterval(function() {
  if (scrollTrue) {
    hasScrolled();
    didScroll = false;
  }
}, 250);
function hasScrolled() {
	var delta = 5;
	var navbarHeight = $("header").outerHeight();
	var st = $(this).scrollTop();
	if(Math.abs(lastScrollTop-st) <= delta){
		return;
	}
	if(st>lastScrollTop && st > navbarHeight){
		$('header').removeClass('nav-down').addClass('nav-up');
		
	} else if(st+$(window).height() < $(document).height()){
		$('header').removeClass('nav-up').addClass('nav-down');
	}
	lastScrollTop=st;
}