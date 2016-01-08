books.service('bookService', ['$http',
    function($http) {
        this.getBooks = function(cb) {
            $http.get('book.json').success(function(data) {
                cb(data);
            });
        };

        this.getFilterTypes = function() {
            var filters = {};
            filters.default = {'category': 'Fiction', 'type': 'Fantasy'};

            filters.categories = ['Fiction', 'Non-Fiction'];
            filters.types = ['Adventure', 'Arts', 'Fantasy'];
            return filters;
        };
    }
]);
