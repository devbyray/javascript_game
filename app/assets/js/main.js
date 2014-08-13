require.config({

  paths : {
    jquery		: '../components/jquery/jquery.min',
    velocity	: '../components/velocity/velocity.min',
    domReady  : '../components/require/require.domready',
    order  : '../components/require/require.order',
    keypress  : '../components/keypress/keypress.min',

    // Controllers
    preloader  : 'controllers/preloader_controller',
    device  : 'controllers/device_controller',
  },

  shim : {
    'velocity' : {
      deps : ['jquery']
    }
  },

  deps : ['jquery', 'velocity', 'keypress', 'app', 'domReady'],
  callback : function ($, velocity, keypress, app, domReady) {
    domReady(function() {
      app.init();
    });
  }
  
});