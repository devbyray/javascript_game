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
		require(['airplane', 'amo'], function (airplane, amo) {
			var leftPos = airplane.planePosition().left;
			var topPos = airplane.planePosition().top;
			var rightPos = airplane.planePosition().right;
			var bottomPos = airplane.planePosition().bottom;

			var keyCtrl = keyboardCodes[e.keyCode].toLowerCase();

			/*
				Navigation commands
				Fly: up, down, left & right
				Functions can be found
			 */
			if(keyCtrl === 'left' || keyCtrl === 'a' || keyCtrl === 'num_4') {
				// console.log('Fly to left sir!');
				airplane.flyHorizontal(Math.round(leftPos-50)+'px');
			}
			if(keyCtrl === 'right' || keyCtrl === 'd' || keyCtrl === 'num_6') {
				// console.log('Fly to right sir!');
				airplane.flyHorizontal(Math.round(leftPos+50)+'px');
			}
			if(keyCtrl === 'up' || keyCtrl === 'w' || keyCtrl === 'num_8') {
				// console.log('Fly to up sir!');
				airplane.flyVertical(Math.round(topPos-50)+'px');
			}
			if(keyCtrl === 'down' || keyCtrl === 's' || keyCtrl === 'num_2') {
				// console.log('Fly to down sir!');
				airplane.flyVertical(Math.round(topPos+50)+'px');
			}

			/*
				Navigation commands
				Fly: up, down, left & right
				Functions can be found
			 */
			if(keyCtrl === 'space') {
				console.log('Shoot!');
				amo.shoot();
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
		65: 'A',
		87: 'W',
		68: 'D',
		83: 'S',
	    96: "num_0",
	    97: "num_1",
	    98: "num_2",
	    99: "num_3",
	    100: "num_4",
	    101: "num_5",
	    102: "num_6",
	    103: "num_7",
	    104: "num_8",
	    105: "num_9"
	}

	return {
		loadKeyboardCtrl: function() {
			keyboardCtrl();
		}
	}


});
