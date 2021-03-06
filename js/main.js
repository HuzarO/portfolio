$('.pages a').on('click', function (e) {
	return Page.set($(this).data('id'), e);
});

$('button.preview').on('click', function (e) {
	window.open(
		$(this).data('url'),
		'_blank'
	);
});

$('.contact > li > a').on('click', function (e) {
	e.preventDefault();

	$('div.tab').each(function () {
		$(this).removeClass('tab-active');
	});

	$('.contact > li > a').each(function () {
		$(this).removeClass('active');
	});

	$('.contact > li > a[data-id="' + $(this).data('id') + '"]').addClass('active');
	$('div.tab[data-id="' + $(this).data('id') + '"]').addClass('tab-active');

	return false;
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
	baron('.content-wrapper, .project', {
		position: 'absolute'
	});

	$(window).on('load resize scroll', function () {
		var wWidth = $(window).width();
		var wHeight = $(window).height();
		var ratio = (wHeight * 16 / 9);
		var left = (ratio - wWidth) / 2;

		var props = {
			minWidth: ratio + 'px',
			height: wHeight + 'px',
			left: -left + 'px'
		};

		console.log(ratio, wWidth);
		if (ratio < wWidth) {
			props.minWidth = wWidth + 'px';
			props.left = 0;
		}

		$('.rslides img, .rslides div').css(props);

		$('.content-wrapper').css({
			width: wWidth + 'px',
			height: (wHeight - 62) + 'px'
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
		'img/slide3.jpg',
		'img/slide4.jpg',
		'img/project1_0.jpg',
		'img/project1_1.jpg',
		'img/project1_2.jpg',
		'img/project2_0.jpg',
		'img/project2_1.jpg',
		'img/project2_2.jpg',
		'img/project2_3.jpg',
		'img/project3_0.jpg',
		'img/project3_1.jpg',
		'img/project3_2.jpg',
		'img/project4_0.jpg',
		'img/project4_1.jpg',
		'img/project4_2.jpg',
		'img/project5_0.jpg',
		'img/project5_1.jpg',
		'img/project5_2.jpg',
		'img/project5_3.jpg',
		'img/project6_0.jpg',
		'img/project6_1.jpg',
		'img/project6_2.jpg',
		'img/project6_3.jpg'
	], function () {
		var wWidth = $(window).width();
		var wHeight = $(window).height();
		var ratio = (wHeight * 16 / 9);
		var left = (ratio - wWidth) / 2;

		var props = {
			minWidth: ratio + 'px',
			height: wHeight + 'px',
			left: -left + 'px'
		};

		if (ratio < wWidth) {
			props.minWidth = wWidth + 'px';
			props.left = 0;
		}

		$('.rslides img, .rslides div').css(props);

		$('.content-wrapper').css({
			width: wWidth + 'px',
			height: (wHeight - 62) + 'px'
		});

		$('#loader-wrapper').animateCss('fadeOut', function () {
			$('.navbar').animateCss('fadeIn', function () {
				$(".rslides, .gallery_rslides").responsiveSlides({
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

	//$('.content-wrapper').mCustomScrollbar('update');

	$('.content-wrapper, .navbar').removeClass('open');

	return true;
};