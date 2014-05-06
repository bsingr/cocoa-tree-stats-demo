mocha.setup('bdd');
var expect = chai.expect;

require.config({
  baseUrl: 'javascripts/',
  paths: {
      jquery: '../bower_components/jquery/jquery',
      backbone: '../bower_components/backbone/backbone',
      underscore: '../bower_components/underscore/underscore'
  },
  shim: {
      underscore: {
          exports: '_'
      },
      jquery: {
          exports: '$'
      },
      backbone: {
          deps: ['underscore', 'jquery'],
          exports: 'Backbone'
      }
  }
});

var specs = [
  'javascripts/specs/lib/http_client_specs.js',
  'javascripts/specs/lib/github_client_specs.js'
]; 
require(specs, function() {
  mocha.run();
});
