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
			navText: [],
			responsive: {
				1023: {
					items: 3
				},
				768: {
					items: 2
				},
				320: {
					items: 1
				}
			}
	});
}
