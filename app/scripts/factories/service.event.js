/**
 * Created by stan on 2/2/15.
 */
/**
 * Created by stan on 1/30/15.
 */
'use strict';

angular.module('sjccm.service.event', [])
  .factory('EventService', function ($http, API) {
    var service = {},
      newsEp = API + 'event';

    service.post = function (news) {
      return $http.post(newsEp, news);
    };

    service.get = function (id, param) {
      return $http.get(id ? newsEp + '/' + id : newsEp, {params: param});
    };

    service.getLatest=function(fieldName){
      return $http.get([newsEp,'/incoming'].join(''),{field:fieldName});
    };

    service.instantSearch=function(search){
      return $http.get([newsEp,'/instantSearch'].join(''),{params:search});
    };
    return service;
  });
