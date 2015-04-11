<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta name="layout" content="main"/>
    <title>Dashboard</title>
    <style>
        .strikethrough  {text-decoration: line-through}
    </style>
</head>

<body ng-app="todo">
<div id="page-wrapper" ng-controller="TodoController">
    <div class="row">
        <div class="col-lg-12">
            <h1>TODO's
                <small>A Blank Slate</small>
            </h1>
        </div>
    </div>


    <div class="row">
        <div class="col-lg-6">
            <form name="createTodo" ng-submit="createTodo.$valid && addTodo()" novalidate>
                <div class="panel panel-primary">
                    <div class="panel-heading">
                        <h3 class="panel-title">I need to...</h3>
                    </div>
                    <div class="panel-body">
                        <div class="form-group">
                            <input name="task" required class="form-control" placeholder="Enter text" ng-model="task">
                        </div>
                        <input type="submit"
                               class="btn btn-success" value="Create"/>
                    </div>
                </div>
            </form>
        </div>
        <div class="col-lg-6">
            <ul class="list-group">
                <my-tasks></my-tasks>
            </ul>
        </div>
    </div>
</div><!-- /#page-wrapper -->

</body>
</html>
