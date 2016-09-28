angular.module('starter.services', ['ngResource'])

.factory('Session', ['$resource', function($resource){
    return $resource('http://localhost:5000/sessions/:sessionId');
}]);
