$(function () {

	$('.slider-top-wrapper').slick({
		arrows: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		centerMode: false,
		variableWidth: false,
		fade: true,
		prevArrow: '<button type="button" class="slick-prev icon-angle-left"></button>',
		nextArrow: '<button type="button" class="slick-next icon-angle-right"></button>',
		responsive: [
			{
				breakpoint: 1500,
				settings: {
					arrows: false,
					dots: true,
				}
			},
		]
	});

	$('.news__inner').slick({
		arrows: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		variableWidth: true,
		prevArrow: '<button type="button" class="slick-prev icon-angle-left"></button>',
		nextArrow: '<button type="button" class="slick-next icon-angle-right"></button>',
		responsive: [
			{
				breakpoint: 1100,
				settings: {
					arrows: false,
					dots: true
				}
			},
		]
	});

	$('.ham').on('click', function (){
		$('.header__menu').slideToggle()
	});




});