'use strict';


angular.module('flickrSearchApp')
  .controller('FlickrSearchController', ['$scope', '$http', function ($scope, $http) {

              $scope.change = function() {
                console.log('called change');

                //TODO: move this to service
                $http.get('people.json').success(function(data) {
                   $scope.people = data;
                   console.log(data);
                }). error(function() {
                    console.log('error');
                    $scope.error = 'Error occured while searching';
                });

              }

    }]);




