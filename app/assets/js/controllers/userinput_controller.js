// Load modules
define(['device', 'hammer', 'keypress', 'airplane'], 
	function (device, Hammer, keypress, airplane) {

	"use strict";

	var gameCanvas = document.getElementById("gameCanvas"),
		mc = new Hammer.Manager(gameCanvas);

	console.log('Userinput controller is loading....');

	if(device.deviceType() === 'device') {
		touchDevice();
	} else {
		window.addEventListener("keydown", keyboardInput, false);
		// var listener = window.keypress.Listener();
	}

	function touchDevice() {
		console.log('touchDevice!');
		// Tap recognizer with minimal 2 taps
		mc.add( new Hammer.Tap({ event: 'doubletap', taps: 2 }) );
		// Single tap recognizer
		mc.add( new Hammer.Tap({ event: 'singletap' }) );


		// we want to recognize this simulatenous, so a quadrupletap will be detected even while a tap has been recognized.
		mc.get('doubletap').recognizeWith('singletap');
		// we only want to trigger a tap, when we don't have detected a doubletap
		mc.get('singletap').requireFailure('doubletap');


		mc.on("singletap doubletap", function(ev) {
		    // gameCanvas.textContent += '<h1>'+ ev.type +"</h1> ";
		    console.log(ev.type);
		    if(ev.type === 'singletap') {
			    singleTap(ev);
			}
		    if(ev.type === 'doubletap') {
			    doubleTap(ev);
			}
		});
	}

	function singleTap(ev) {
		alert('SingleTap');
	}
	function doubleTap(ev) {
		alert('doubleTap');
	}

	function keyboardInput(e) {
		console.log(keyboardCodes[e.keyCode].toLowerCase());

		var keyCtrl = keyboardCodes[e.keyCode].toLowerCase();
		if(keyCtrl === 'left') {
			console.log('Fly to left sir!');
			airplane.flyHorizontal();
		}
		if(keyCtrl === 'right') {
			console.log('Fly to right sir!');
			airplane.flyHorizontal(+10);
		}
	}

	var keyboardCodes = {
		8: 'Backspace',
		9: 'Tab',
		13: 'Enter',
		16: 'Shift',
		17: 'Ctrl',
		18: 'Alt',
		32: 'Space',
		37: 'Left',
		38: 'Up',
		39: 'Right',
		40: 'Down',
		65: 'A - Left',
		87: 'W - Up',
		68: 'D - Right',
		83: 'S - Down',
	    96: "num_0",
	    97: "num_1",
	    98: "num_2 - Down",
	    99: "num_3",
	    100: "num_4 - Left",
	    101: "num_5",
	    102: "num_6 - Right",
	    103: "num_7",
	    104: "num_8 - Up",
	    105: "num_9"
	}


});
