/*!
 * JavaScriptGame
 * Try to make an cool JavaScript Game
 * none
 * @author Raymon Schouwenaar
 * @version 1.0.0
 * Copyright 2014. MIT licensed.
 */
var base_require = require.config({

  paths : {
    jquery		: '../components/jquery/jquery.min',
    velocity	: '../components/velocity/velocity.min',


  },
  shim : {
    'velocity' : {
      deps : ['jquery']
    }
  },
  deps : ['jquery', 'velocity'],
  callback : function ($, velocity, ) {
	JSgame.init();
  }
});