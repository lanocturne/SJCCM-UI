/**
 * Created by stan on 2/2/15.
 */
/**
 * Created by stan on 1/30/15.
 */
'use strict';

angular.module('sjccm.service.news', [])
  .factory('NewsService', function ($http, API) {
    var service = {},
      newsEp = API + 'news';

    service.post = function (news) {
      return $http.post(newsEp, news);
    };

    service.get = function (id) {
      return $http.get(id ? newsEp + '/' + id : newsEp);
    };

    return service;
  });
