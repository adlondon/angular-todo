angular
  .module('TodoList', ['ngRoute'])
    .config(function($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: "templates/main.html",
          controller: "TodoController"
        })
    });
