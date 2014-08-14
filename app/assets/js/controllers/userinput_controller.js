// Load modules
define(['device', 'keyboard', 'touch', 'airplane'], 
	function (device, keyboard, touch, airplane) {

	"use strict";

	console.log('Userinput controller is loading....');

	if(device.deviceType() === 'device') {
		touch.loadTouchCtrl();
	} else {
		keyboard.loadKeyboardCtrl();
	}


});
