import angular from 'angular';

angular
  .module('gitHubViewer', [])
  .controller('MainCtrl', function($scope, $http, $interval, $log) {

    $scope.username = 'angular';
    $scope.message = 'GitHub Viewer';
    $scope.repoSortOrder = '-stargazers_count';
    $scope.countdown = 5; 

    var onUserComplete = function(response) {
      $scope.user = response.data;
      $http.get($scope.user.repos_url).then(onRepos, onError);
    };

    var onRepos = function(response) {
      $scope.repos = response.data;
    };

    var onError = function(reason) {
      $scope.error = 'could not fetch the data';
    };

    var decrementCountdown = function() {
      $scope.countdown -= 1; 
      if($scope.countdown < 1) {
        $scope.search($scope.username);
      }
    };

    var startCountdown = function() {
      $interval(decrementCountdown, 1000, $scope.countdown)
    }

    $scope.search = function(username) {
      $http
        .get('https://api.github.com/users/' + username)
        .then(onUserComplete, onError);
    };
   
    startCountdown(); 

  });
