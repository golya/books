booksController.$inject = ['$scope', '$location', '$timeout', 'bookService'];
angular.module('books').controller('booksController', booksController);

function booksController($scope, $location, $timeout, bookService) {
    var pageSize = 10;
    $scope.filters = {};
    $scope.from = 0;
    $scope.hasMore = true;
    $scope.books = [];
    bookService.getFilterTypes(function(filters) {
        $scope.filters = {'search': ''};
        $scope.filters = filters.default
        $scope.categories = filters.categories;
        $scope.types = filters.types;
    });

    var searchTimeout;
    $scope.$watch('filters', function(){
        $scope.hasMore = true;
        $scope.from = 0;
        $scope.books = [];
        if ( 'search' in $scope.filters && $scope.filters.search == '') {
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

    $scope.clear = function () {
        $scope.filters.search = '';
    };

    $scope.path = function (path) {
        $location.path(path);
    };

    getBooks = function getBooks () {
        bookService.getBooks($scope.filters, $scope.from, function(books) {
            if (books.length < pageSize) {
                $scope.hasMore = false;
            }
            _.forEach(books, function(book){
                $scope.books.push(book);
            });
        });
    }

    $scope.getMoreBooks = function () {
        if ($scope.books.length > 0) {
            $scope.from += pageSize;
            getBooks();
        }
    }
}
