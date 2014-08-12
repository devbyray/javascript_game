require.config({

  paths : {
    jquery		: '../components/jquery/jquery.min',
    velocity	: '../components/velocity/velocity.min',
    domReady  : '../components/require/require.domready',

    // Controllers
    preloader  : 'controllers/preloader_controller',
  },

  shim : {
    'velocity' : {
      deps : ['jquery']
    }
  },

  deps : ['jquery', 'velocity', 'app', 'domReady'],
  callback : function ($, velocity, app, domReady) {
    domReady(function() {
      app.init();
    });
  }
  
});