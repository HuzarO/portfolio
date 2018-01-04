(function () {
	'use strict';

	$('div.project-base > div, div.project-base > img, div.project-base > button, button.hide_gallery').on('click', function (e) {
		e.preventDefault();

		if ($('#gallery_container').hasClass('open')) {
			$('#gallery_container').addClass('closing').removeClass('open');
			setTimeout(function () {
				$('#gallery_container').removeClass('closing');
				$('#gallery_container .project.active').removeClass('active');
			}, 500);
		} else {
			var id = $(this).parents('div.project-base').data('id');
			$('#gallery_container .project[data-id="' + id + '"]').addClass('active');
			$('#gallery_container').addClass('open');
		}

		return false;
	});
})();