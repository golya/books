booksController.$inject = ['$scope', '$location', 'bookService'];
angular.module('books').controller('booksController', booksController);

function booksController($scope, $location, bookService) {
    var filters = bookService.getFilterTypes();
    $scope.filters = filters.default
    $scope.categories = filters.categories;
    $scope.types = filters.types;

    $scope.$watch('filters', function(){
        getBooks();
    }, true);

    $scope.path = function (path) {
        $location.path(path);
    };

    function getBooks () {
        bookService.getBooks($scope.filters, function(books){
            $scope.books = books;
        });
    }
}
