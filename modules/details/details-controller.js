detailsController.$inject = ['$scope', '$routeParams', '$location', 'bookService'];
angular.module('details').controller('detailsController', detailsController);

function detailsController($scope, $routeParams, $location, bookService) {
    bookService.getBook($routeParams.id, function(book){
        $scope.book = book;
    });

    bookService.getRecommendations(function(books){
        $scope.books = books;
    });

    $scope.path = function (path) {
        $location.path(path);
    };
}
