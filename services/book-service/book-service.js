books.service('bookService', ['$http',
    function($http) {
        this.getBooks = function(cb) {
            $http.get('book.json').success(function(data) {
                cb(data);
            });
        };
    }
]);
