'use strict';

/**
 * @ngdoc function
 * @name sjccm.controller:HeaderCtrl
 * @description
 * # MainCtrl
 * Controller of the admin part
 */
angular.module('sjccm.index.header', [
  'timer', 'sjccm.service.event',
  'sjccm.factory.respond'])
  .controller('HeaderCtrl', function ($scope, EventService, RespondFactory) {
    EventService.getLatest('date')
      .then(function (res) {
        var date = res.data._source.date;
        if (moment(date).isAfter(moment())) {
          $scope.date = moment(date).valueOf();
        }
      });

    //notification of responds
    $scope.responds = RespondFactory.fb;
  });
