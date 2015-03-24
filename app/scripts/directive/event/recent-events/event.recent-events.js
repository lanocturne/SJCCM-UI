/**
 * Created by stan on 2/2/15.
 */
'use strict';

angular.module('sjccm.event.recent', [])
  .directive('recentEvents', function () {
    return {
      restrict: 'E',
      templateUrl: 'scripts/directive/event/recent-events/recent-events.html',
      scope: {
        events:'='
      }
    }
  });
