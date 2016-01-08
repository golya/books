booksController.$inject = ['$scope', 'bookService'];
angular.module('books').controller('booksController', booksController);

function booksController($scope, bookService) {
    var filters = bookService.getFilterTypes();
    $scope.filters = filters.default
    $scope.categories = filters.categories;
    $scope.types = filters.types;

    $scope.$watch('filters', function(){
        bookService.getBooks($scope.filters, function(books){
            $scope.books = books;
        });
    }, true);

}
