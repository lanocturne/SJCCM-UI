'use strict';

/**
 * @ngdoc overview
 * @name sjccm
 * @description
 * # sjccm
 *
 * Main module of the application.
 */
angular
  .module('sjccm', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch',
    'sjccm.constants',
    'sjccm.admin',
    'sjccm.index',
    'sjccm.event',
    'mgcrea.ngStrap',
    'ui.bootstrap',
    'angularMoment',
    'ngMaterial'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('main',{
        abstract: true,
        views:{
          main:{},
          header:{
            templateUrl:'views/header.html',
            controller:'HeaderCtrl'
          },
          footer:{
            templateUrl:'views/footer.html'
          }
        }
      });
  });
