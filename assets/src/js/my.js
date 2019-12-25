$(function () {

    $(window).scroll(function () {
		var windowTop = $(window).scrollTop();
		windowTop >= 50 ? $('nav').addClass('navSkrol') : $('nav').removeClass('navSkrol');
		

	});
});

