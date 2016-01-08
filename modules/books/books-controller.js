booksController.$inject = ['$scope', 'bookService'];
angular.module('books').controller('booksController', booksController);

function booksController($scope, bookService) {
    bookService.getBooks(function(books){
        $scope.books = books;
    });
}
