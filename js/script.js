$(document).ready(function(){

	$(".owl-carousel").owlCarousel({
		items: 1,
		nav: true,
		navText: "",
		loop: true
	});
	
	$('.btn-popup').magnificPopup({
		type: 'inline'
	});

	$('.popup-success').magnificPopup({
		type: 'inline'
	});

	$('.graphic-img').magnificPopup({
		type: 'image'
	});

	$('.obj-item').magnificPopup({
		type: 'image'
	});

	$(".up_button img").click(function(){
		$("html, body").animate({ scrollTop: 0 }, 600);
		return false;
	});

	$(".overlay").click(function(){
		$(this).remove();
	});

	$(".toggle_mnu").click(function() {
		$(".sandwich").toggleClass("active");
	});

	$(".toggle_mnu").click(function() {
		if ($(".nav").is(":visible")) {
			$(".nav").fadeOut(600);
		} else {
			$(".nav").fadeIn(600);
		};
	});
	
});

$(window).scroll(function(){

	if($(this).scrollTop() >= 300){
		$(".header-top2").addClass("header-visible");
	}
	else{
		$(".header-top2").removeClass("header-visible");
	}

});