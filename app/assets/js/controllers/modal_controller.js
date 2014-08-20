// Load modules
define(function () {

	"use strict";

	console.log('Modal script is loading....');

	var htmlViews = '../views/';

	return {
		introModalWindow: function(time) {
			setTimeout( function() {
				$('.modal').addClass('introduction').load('assets/views/modal.html').show().velocity(
					{opacity: 1},2000
				);
			}, time);
		},
		hideModal: function() {
			$('#close_modal').click( function() {
				console.log('click');
				$('.modal').removeClass('introduction')
				.velocity({opacity: 0}, 2000)
				.hide();
			});
		}
	}
});
