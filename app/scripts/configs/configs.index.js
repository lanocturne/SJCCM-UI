/**
 * Created by stan on 1/28/15.
 */
'use strict';

angular.module('sjccm.index', [
  'ui.router',
  'slick',
  'sjccm.service.news', 'sjccm.service.event', 'sjccm.util.image',
  'sjccm.index.header',
  'sjccm.directive.main.mediaSection',
  'sjccm.event.recent',
  'sjccm.directive.main.footer'])
  .constant('MainState','index')
  .config(function ($stateProvider) {
    $stateProvider.state('index', {
      url: '/',
      parent: 'main',
      views: {
        'main@': {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl'
        }
      }
    });
  });
