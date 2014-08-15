// Load modules
define(function () {

	"use strict";

	console.log('Userinput controller is loading....');
	require(['device'], function (device) {

		console.log('device check');

		if(device.deviceType() === 'device') {

			console.log('Type is device');

			debugger;
			require(['touch'], function (touch) {
				touch.loadTouchCtrl();			
			});

		} else {

			console.log('Type is computer');
			require(['keyboard'], function (keyboard) {
				keyboard.loadKeyboardCtrl();
			});

		}

	});


});
