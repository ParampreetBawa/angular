var app = angular.module('todo',['ui.router']);
app.config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/todo');
    $stateProvider
        .state('todo',{
            url:'/todo',
            templateUrl:'partials/todo.html'
        })

        .state('collection',{
            url:'/collection',
            templateUrl:'partials/collection.html'
        });
});

app.controller("TodoController",["$scope","$http",function($scope,$http){
    $scope.todos = [];
    $scope.todo = {} ;
    $scope.addTodo = function(){
        var todo = {task:this.task,completed:false}
        $http.post('/api/todo',todo).success(function(data,status){
            todo.id = data.id;
            $scope.todos.push(todo);
        });

    }

    $scope.delete = function(index,id){
        $http.delete('/api/todo/'+id).success(function(data,status){
            $scope.todos.splice(index,1);
        });
    }

    var get = function(){
        $http.get('/api/todo/').success(function(data,status){
            _.each(data,function(todo){
                $scope.todos.push(todo)
            })
        });
    };
        get()





}]).directive("myTasks",function(){
    return {
        restrict: 'AEC',
        templateUrl: 'partials/tasks.html',
        link: function(scope,element) {

        }
    }
}).directive("randomColor",function(){
    return {
        link: function(scope,element){
            var colors= ['red','green','blue'];
            element.css('background-color',colors[Math.floor(Math.random()*3)]);
        }
    }
});