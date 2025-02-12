(function() {

  var app = angular.module("gitHubViewer");
  
  var UserController = function($scope, github, $routeParams) {

    var onUserComplete = function(data) {
      $scope.user = data;
      github.getRepos($scope.user).then(onRepos, onError);
    };

    var onRepos = function(data) {
      $scope.repos = data;
    };

    var onError = function(reason) {
      $scope.error = 'could not fetch the data';
    };

    $scope.username = $routeParams.username; 
    $scope.repoSearchOrder = "-stargazers_count";
    github.getUser($scope.username).then(onUserComplete, onError);

  }

  app.controller("UserController", UserController);

}());
