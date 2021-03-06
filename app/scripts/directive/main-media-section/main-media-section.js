/**
 * Created by stan on 2/2/15.
 */
'use strict';

angular.module('sjccm.directive.main.mediaSection', [
  "com.2fdevs.videogular",
  "com.2fdevs.videogular.plugins.controls",
  "com.2fdevs.videogular.plugins.buffering",
  "com.2fdevs.videogular.plugins.overlayplay",
  "info.vietnamcode.nampnq.videogular.plugins.youtube"
])
  .directive('mainMediaSection', function () {
    return {
      restrict: 'E',
      templateUrl: 'scripts/directive/main-media-section/main-media-section.html',
      scope:{},
      controller: function ($scope) {
        $scope.config = {
          autoHide: false,
          autoHideTime: 3000,
          autoPlay: false,
          sources: [{src:'http://youtu.be/XMgZYykQHLM'}],
          loop: false,
          preload: "auto",
          transclude: true,
          theme: {
            url: "../bower_components/videogular-themes-default/videogular.css"
          }
        };
      },

      link:function(scope,ele){
        var $player = ele.find('audio');

        if($player.length) {
          $player.mediaelementplayer({
            audioWidth  : '100%',
            audioHeight : '34px',
            videoWidth  : '100%',
            videoHeight : '100%'
          });
        }
      }
    }
  });
