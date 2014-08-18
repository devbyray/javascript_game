require.config({

  paths : {
    jquery		: '../components/jquery/jquery.min',
    velocity	: '../components/velocity/velocity.min',
    domReady  : '../components/require/require.domready',
    order  : '../components/require/require.order',
    hammer  : '../components/hammer/hammer.min',
    keypress  : '../components/keypress/keypress.min',

    // Controllers
    canvas  : 'controllers/canvas_controller',
    preloader  : 'controllers/preloader_controller',
    device  : 'controllers/device_controller',
    userinput  : 'controllers/userinput_controller',
    keyboard  : 'controllers/user_keyboard_controller',
    touch  : 'controllers/user_touch_controller',
    airplane  : 'controllers/airplane_controller',
    amo  : 'controllers/amo_controller',
  },

  shim : {
    'velocity' : {
      deps : ['jquery']
    },
  },

  deps : ['jquery', 'velocity', 'domReady', 'app'],
  callback : function ($, velocity, domReady, app) {
    domReady(function() {
      app.init();
    });
  }
  
});