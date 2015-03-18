'use strict';

/**
 * @ngdoc function
 * @name sjccm.controller:EventsCtrl
 * @description
 * # EventsCtrl
 * Controller of the event part
 */
angular.module('sjccm.event.detail',[
  'sjccm.directive.pageHeader',
'sjccm.directive.breadCrumbs',
'sjccm.directive.respond'])
  .controller('EventCtrl', function (
    $scope,
    $stateParams,
    $q,
    $state,
    API,
    EventService,
    MainState,
    EventStates,
    event
  ) {
    $scope.states=[{
      name: '主頁',
      path: MainState
    },{
      name: '活動表',
      path: EventStates.list
    },{
      name: '活動'
    }];
    $scope.event=event.data._source;
    //recent events
    EventService.get(null, {size: 4, sort: 'date'}).then(function (res) {
      _.remove(res.data,{_id:$stateParams.id});
      $scope.events = res.data;
    });

    $scope.search={
      selectedItem:null,
      searchText:null,
      querySearch:function(query){
        var defer=$q.defer();
        EventService.instantSearch({search:query})
          .then(function(res){
            defer.resolve(res.data);
          });
        return defer.promise;
      },

      go:function(){
        $state.go('.',{id:this.selectedItem._id});
      }
    }
  });
