var dependencies = ['ngRoute'];
var routes = [];
var books = angular.module('booksApp', dependencies);

books.config(['$routeProvider',
    function($routeProvider) {
        _.forEach(routes, function(route){
            var path = route.path || "/"+route.module;
            var templateUrl = route.templateUrl || "/modules/"+route.module+"/"+route.module+".html.tpl";
            var controller = route.controller || route.module+"Controller";
            var route = {
                'templateUrl': templateUrl,
                'controller': controller
            }
            $routeProvider.when(path, route)
        });
        $routeProvider.otherwise({redirectTo: '/'});
    }
]);

// routes
