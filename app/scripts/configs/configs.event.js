'use strict';
/**
 * Created by stan on 2/28/15.
 */
angular.module('sjccm.event', ['sjccm.event.list', 'sjccm.event.detail'])
  .constant('EventStates', {
    list: 'events',
    detail: 'events.detail'
  })
  .config(function ($stateProvider) {
    $stateProvider.state('events', {
      url: '/events',
      parent: 'main',
      views: {
        'main@': {
          templateUrl: 'views/event/events.html',
          controller: 'EventsCtrl'
        }
      }
    })
      .state('events.detail', {
        url: '/:id',
        views: {
          'main@': {
            templateUrl: 'views/event/event.detail.html',
            controller: 'EventCtrl'
          }
        },
        resolve: {
          event: function (EventService, $stateParams) {
            return EventService.get($stateParams.id);
          }
        }
      });
  });
