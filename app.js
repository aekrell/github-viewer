import angular from 'angular'; 

(function(){

  var app = angular.module("gitHubViewer",["ngRoute"]);

  app.config(function($routeProvider){
    $routeProvider
      .when("/main",{
        templateURL: "main.html",
        controller: "MainController"
      })
      .when("/user/:username",{
        templateURL: "user.html",
        controller: "UserController"
      })
      .when("/repo/:username/:reponame," {
        templateURL: "repo.html",
        controller: "RepoController"
      })
      .otherwise({redirectTo:"/main"});
  });

}());