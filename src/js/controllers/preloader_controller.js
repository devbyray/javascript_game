// Load modules
define(['jquery', 'velocity'], 
function ($, velocity) {

	"use strict";

	$(function () {

		console.log('Preloader is loading....');

		$('#gameCanvas').fadeIn('fast', function() {
			this.append('Loader');
		});

	});

});
