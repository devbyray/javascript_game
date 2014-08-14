// Load modules
define(['device', 'keyboard', 'touch'], 
	function (device, keyboard, touch) {

	"use strict";

	console.log('Userinput controller is loading....');

	if(device.deviceType() === 'device') {
		touch.loadTouchCtrl();
	} else {
		keyboard.loadKeyboardCtrl();
	}


});
