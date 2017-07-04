$(document).ready(function () {
	callSliders();
});

function callSliders() {
	$('#main-slider').owlCarousel({
		items: 1,
		loop: true,
		center: true,
		autoplay: true
	});
	$('#main-category-slider').owlCarousel({
			items: 3,
			dots: false,
			nav: true,
			navText: []
	});
}
