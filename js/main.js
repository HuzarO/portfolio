$('.pages a').on('click', function (e) {
	return Page.set($(this).data('id'), e);
});

$('.openIcons').on('click', function (e) {
	e.preventDefault();

	$('#navbar > .pages, #navbar > .social > div > ul').toggleClass('icons');
	$(this).toggleClass('active');
	return false;
});

$('.navbar-toggle').on('click', function (e) {
	$('.navbar, .content-wrapper').toggleClass('open');
});

$(function () {
	$(window).resize(function () {
		var wWidth = $(window).width();
		var wHeight = $(window).height();
		var ratio = 1080 / wHeight;

		$('.rslides img').css({
			width: (wWidth * ratio) + 'px',
			height: wHeight + 'px'
		});

		$('.content-wrapper').css({
			width: wWidth + 'px',
			height: wHeight + 'px'
		});
	});

	var matchedAny = false;
	$('.pages a').each(function () {
		if ($(this).attr('href') !== '#' && window.location.href.includes($(this).attr('href'))) {
			Page.set($(this).data('id'));
			matchedAny = true;
		}
	});

	if (!matchedAny) {
		Page.set(0);
	}

	Loader([
		'img/slide1.jpg',
		'img/slide2.jpg',
		'img/slide3.jpg'
	], function () {
		var wWidth = $(window).width();
		var wHeight = $(window).height();

		$('.content-wrapper').css({
			width: wWidth + 'px',
			height: wHeight + 'px'
		});

		$('.loading-wrapper').animateCss('fadeOut', function () {
			$('.navbar').animateCss('fadeIn', function () {
				$(".rslides").responsiveSlides({
					auto: true,
					speed: 1000,
					pager: false,
					random: false,
					pause: false,
					pauseControls: false,
					nav: false
				});

				$('.content-wrapper').animateCss('fadeIn');
			});
		});
	});
});

$.fn.extend({
	animateCss: function (animationName, callback) {
		var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		this.addClass('animated ' + animationName).one(animationEnd, function () {
			$(this).removeClass('animated ' + animationName).addClass('finished');
			if (callback) {
				callback();
			}
		});
		return this;
	}
});

if (!String.prototype.includes) {
	String.prototype.includes = function () {
		'use strict';
		return String.prototype.indexOf.apply(this, arguments) !== -1;
	};
}

function Loader(files, callback) {
	if (!files) {
		files = [];
	}

	var loaded = 0;
	for (var i = 0; i < files.length; i++) {
		var img = new Image();
		img.onload = function () {
			loaded++;

			if (loaded >= files.length) {
				if (callback) {
					callback();
				}
			}
		};
		img.src = files[i];
	}
}

function Page() {
} // Instantiate
Page.animating = false;

Page.set = function (id, event) {
	if ($('.page.page-current').data('id') === id) {
		return false;
	}

	if (Page.animating) {
		if (event) {
			event.preventDefault();
		}
		return false;
	}

	Page.animating = true;

	if ($('.page.page-current').length) {
		$('.page.page-current').animateCss('zoomOut', function () {
			$('.page.page-current').removeClass('page-current');

			$('.page[data-id="' + id + '"]').addClass('page-current');
			$('.page[data-id="' + id + '"]').animateCss('zoomIn');
			Page.animating = false;
		});
	} else {
		$('.page[data-id="' + id + '"]').addClass('page-current');
		Page.animating = false;
	}

	$('.pages a').each(function () {
		$(this).removeClass('active');
		if ($(this).data('id') === id) {
			$(this).addClass('active');
		}
	});

	$('.content-wrapper, .navbar').removeClass('open');

	return true;
};