require.config({

  paths : {
    jquery		: '../components/jquery/jquery.min',
    velocity	: '../components/velocity/velocity.min'
  },

  shim : {
    'velocity' : {
      deps : ['jquery']
    }
  },

  deps : ['jquery', 'velocity', 'scripts'],

  callback : function ($, velocity, JSgame) {

    return new JSgame.init();

  }
  
});