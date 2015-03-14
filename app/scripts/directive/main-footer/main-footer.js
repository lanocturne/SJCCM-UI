/**
 * Created by stan on 2/2/15.
 */
'use strict';

angular.module('sjccm.directive.main.footer', ['ngMessages','sjccm.directive.pops','sjccm.directive.groupFellowship'])
  .directive('mainFooter', function () {
    return {
      restrict: 'E',
      templateUrl: 'scripts/directive/main-footer/main-footer.html',
      controller: function ($scope) {
        $scope.contact = {};
        $scope.about = '卅多年前，我們只是一群台灣出來的教友，在蓬勃發展的矽谷求學就業。為了想在異文化中繼續保持信仰，於是就成立了讀經小組，邀請過往的神父不定期地為我們主持彌撒。當時並沒有要成立自己教會的想法，因此我們大都仍在住處附近堂區參加主日彌撒，偶而教友聚會，也不覺得再需要什麼。直到天主安排了美籍耶穌會士Fr. Ed Malatesta馬愛德神父來到我們當中，我們才嘗試把團體正式組織起來，在教區登記，並以St. Clare 做為本堂。';
      }
    }
  });
