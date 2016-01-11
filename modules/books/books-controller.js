booksController.$inject = ['$scope', '$location', '$timeout', 'bookService'];
angular.module('books').controller('booksController', booksController);

function booksController($scope, $location, $timeout, bookService) {
    bookService.getFilterTypes(function(filters) {
        $scope.filters = filters.default
        $scope.categories = filters.categories;
        $scope.types = filters.types;
    });
    $scope.search = "";

    $scope.$watch('filters', function(){
        getBooks();
    }, true);

    var searchTimeout;
    $scope.$watch('search', function(){
        if ( $scope.search == "") {
            getBooks();
            return false;
        }
        if (searchTimeout) {
            $timeout.cancel(searchTimeout);
        }
        searchTimeout = $timeout(function() {
            bookService.search($scope.search, function(books){
                $scope.books = books;
            });
        }, 250);
    });

    $scope.path = function (path) {
        $location.path(path);
    };

    function getBooks () {
        if (!$scope.filters) {
            return false;
        }
        bookService.getBooks($scope.filters, function(books){
            $scope.books = books;
        });
    }
}
