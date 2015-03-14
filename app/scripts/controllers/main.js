'use strict';

/**
 * @ngdoc function
 * @name sjccm.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the uiApp
 */
angular.module('sjccm.index')
  .controller('MainCtrl', function ($scope, ImagePath, NewsService, EventService, ImageUtil) {
    var slides = ImagePath + 'slides/';

    $scope.headlines = [{
      name: 'One Year with Epiphany Group',
      image: slides + 'slide-3.jpg'
    }, {
      name: 'Cub Scouts Meeting',
      image: slides + 'slide-4.jpg'
    }, {
      name: 'Watermark Potluck',
      image: slides + 'slide-5.jpg'
    }];

    //get news
    NewsService.get().then(function (res) {
      $scope.news = res.data;
      if (res.data.length > 2) {
        $scope.news = _.slice(res.data, 0, 2);
      }
      _.each($scope.news, function (news) {
        if (news._source.image) {
          news._source.image = ImageUtil.flickrSize(news._source.image, 's');
        }
      });
    });

    EventService.get(null, {size: 3, sort: 'date'}).then(function (res) {
      $scope.events = res.data;
    });
  });
