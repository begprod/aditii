$(document).ready(function () {
	console.log('Alive!!!');
	callSlider();
});

function callSlider() {
	$(".owl-carousel").owlCarousel({
		items: 1,
		loop: true,
		center: true,
		autoplay: true
	});
}