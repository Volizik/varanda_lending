import svg4everybody from 'svg4everybody';
import $ from 'jquery';

$(() => {
	svg4everybody();

	$(document).on('click', '.nav__item a', function () {
		event.preventDefault();
		const id = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $('section[id=' + id + ']').offset().top
		}, 1000);
		if (window.innerWidth < 992) {
			$('ul.nav__col').slideUp('fast');
			$('.nav__btn').removeClass('nav__btn--close');
		}
	});

	$(document).on('click', '.nav__btn', function () {
		if (window.innerWidth < 992) {
			$(this).toggleClass('nav__btn--close');
			$('ul.nav__col').slideToggle().css('display', 'flex');
		}
	});
	$(document).on('click', '.header .yellow-btn', function () {
		event.preventDefault();
		$('html, body').animate({
			scrollTop: $('section[id="menu"]').offset().top
		}, 1000);
	});

});
