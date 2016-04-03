(function() {
   'use strict';

   angular
      .module('app.landing')
      .config(configFunction);

      configFunction.$inject = ['$stateProvider', '$urlRouterProvider'];

      function configFunction($stateProvider, $urlRouterProvider) {
         $urlRouterProvider.otherwise('/');

         $stateProvider
            .state('home', {
               url: '/',
               templateUrl: 'home.jade'
            });
      }

})();
