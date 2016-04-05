'use strict';

(function () {
   'use strict';

   //tets

   angular.module('app.landing').config(configFunction);

   configFunction.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

   function configFunction($stateProvider, $urlRouterProvider, $locationProvider) {

      $stateProvider.state('home', {
         url: '/',
         views: {
            '': { template: 'home.html' }
         }
      });

      $urlRouterProvider.otherwise('/');
      $locationProvider.html5Mode(true);
   }
})();