angular
  .module('TodoList')
    .service('TodoService', function($http) {
      var url = 'http://tiny-tiny.herokuapp.com/collections/todo';
      function getAllTodos() {
        $http.get(url);
      };
      function getTodo(id) {
        $http.get(url + '/' + id);
      };
      function postTodo(post) {
        $http.post(url, post)
      };
      function deleteTodo(id) {
        $http.delete(url + '/' + id);
      };
      function editTodo(id, post) {
        $http.put(url + '/' + id, post);
      };

      return {
        getAllTodos: getAllTodos,
        getTodo: getTodo,
        postTodo: postTodo,
        deleteTodo: deleteTodo,
        editTodo: editTodo
      }
    })
