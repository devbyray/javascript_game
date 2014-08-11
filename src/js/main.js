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