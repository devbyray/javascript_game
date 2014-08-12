require.config({

  paths : {
    jquery		: '../components/jquery/jquery.min',
    velocity	: '../components/velocity/velocity.min',

    // Controllers
    preloader  : 'controllers/preloader_controller',
  },

  shim : {
    'velocity' : {
      deps : ['jquery']
    }
  },

  deps : ['jquery', 'velocity', 'init']
  
});

require(['init']);