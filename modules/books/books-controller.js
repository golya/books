booksController.$inject = ['$scope', '$location', '$timeout', 'bookService'];
angular.module('books').controller('booksController', booksController);

function booksController($scope, $location, $timeout, bookService) {
    $scope.filters = {'search': ''};
    bookService.getFilterTypes(function(filters) {
        $scope.filters = filters.default
        $scope.categories = filters.categories;
        $scope.types = filters.types;
    });
    $scope.filters.search = '';

    var searchTimeout;
    $scope.$watch('filters', function(){

        if ( $scope.filters.search == '') {
            getBooks();
            return false;
        }

        if (searchTimeout) {
            $timeout.cancel(searchTimeout);
        }
        searchTimeout = $timeout(function() {
            getBooks();
        }, 250);
    }, true);

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
