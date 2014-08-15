// Load modules
define(	function() {

	"use strict";

	var gameCanvas = document.getElementById("gameCanvas");

	console.log('Keyboard controller is loading....');

	function keyboardCtrl() {
		window.addEventListener("keydown", keyboardInput, false);
	}

	function keyboardInput(e) {
		// console.log(keyboardCodes[e.keyCode].toLowerCase());
		require(['airplane'], function (airplane) {

			var keyCtrl = keyboardCodes[e.keyCode].toLowerCase();
			if(keyCtrl === 'left') {
				console.log('Fly to left sir!');
				var leftPos = airplane.planePosition(['left']);
				debugger;
				console.log(leftPos);
				airplane.flyHorizontal(Math.round(leftPos-50)+'px');
			}
			if(keyCtrl === 'right') {
				console.log('Fly to right sir!');
				var leftPos = airplane.planePosition(['left']);
				debugger;
				console.log(leftPos);
				airplane.flyHorizontal(Math.round(leftPos+50)+'px');
			}
			if(keyCtrl === 'up') {
				// console.log('Fly to up sir!');
				airplane.flyVertical(Math.round(airplane.planePosition(['top'])-50)+'px');
			}
			if(keyCtrl === 'down') {
				// console.log('Fly to down sir!');
				airplane.flyVertical(Math.round(airplane.planePosition(['top'])+50)+'px');
			}

		});
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

	return {
		loadKeyboardCtrl: function() {
			keyboardCtrl();
		}
	}


});
