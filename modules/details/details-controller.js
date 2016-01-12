detailsController.$inject = ['$scope', '$routeParams', '$location', 'bookService'];
angular.module('details').controller('detailsController', detailsController);

function detailsController($scope, $routeParams, $location, bookService) {
    bookService.getBook($routeParams.id, function(book){
        $scope.book = book;
        getRecommendations();
    });

    $scope.path = function (path) {
        $location.path(path);
    };

    function getRecommendations() {
        bookService.getRecommendations(
            {
                'category': $scope.book.genre.category,
                'type': $scope.book.genre.name,
                'id': $scope.book.id
            },
            function(books){
                $scope.books = books;
            }
        );
    }
}
