$(document).ready(function () {
	callSliders();
	showMobileMenu();
	showFooterLinks();
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

function showMobileMenu() {
	$('.menu-trigger').click(function() {
		$('.menu__wrapper').slideToggle(300);
	});
}


function showFooterLinks() {
	$('.footer__head').click(function() {
		$('.footer__links:visible').slideUp(300);
		$(this).parent().find('.footer__links').slideToggle(300);
	});
}