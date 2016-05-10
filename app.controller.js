angular
  .module('TodoList')
    .controller('TodoController', function ($scope, TodoService) {
      console.log(TodoService);
      TodoService.getAllTodos()
      .then(function(data) {
        $scope.todos = data.data;
      });
      $scope.postTodo = function (post) {
        TodoService.postTodo(post);
      }
    })
