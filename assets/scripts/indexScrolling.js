var scrollTrue;
var lastScrollTop = 0;
var sections = ['#mainScreen', '#staff', '#issues', '#submit'];
var secIndex = 0;
var isMachineScroll=false;
var lastSuccessfulScroll = new Date().getTime();

$(document).ready(function(){
	$(document).bind('mousewheel', function(e){
		if(new Date().getTime() - lastSuccessfulScroll < 1000){
			return;
		}
		if(e.originalEvent.deltaY > 0 && secIndex < 3){
			secIndex++;
			scrollToSnapPoint();
		}
		else if(e.originalEvent.deltaY < 0 && secIndex > 0){
			secIndex--;
			scrollToSnapPoint();
		}
		hasScrolled();
		lastSuccessfulScroll = new Date().getTime();
	});
});

function  onScroll(){
	
  	hasScrolled();
  	
}

function hasScrolled() {
	var navbarHeight = $("header").outerHeight();
	var st = $(this).scrollTop();
	if(st>lastScrollTop && st > navbarHeight){
		$('header').removeClass('nav-down').addClass('nav-up');
		
	} else if(st+$(window).height() < $(document).height()){
		$('header').removeClass('nav-up').addClass('nav-down');
	}
	lastScrollTop=st;
}

function scrollToSnapPoint(){
	$('html, body').animate({
		 scrollTop: $(sections[secIndex]).offset().top
	}, 500);
}