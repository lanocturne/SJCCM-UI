/**
 * Created by stan on 2/2/15.
 */
'use strict';

angular.module('sjccm.directive.main.mediaSection', [
  "com.2fdevs.videogular"
])
  .directive('mainMediaSection', function () {
    return {
      restrict: 'E',
      templateUrl: 'scripts/directive/main-media-section/main-media-section.html',
      controller: function ($scope) {
        console.log('play')
      },

      link: function (scope) {

      }
    }
  });
