books.service('bookService', ['$http',
    function($http) {
        this.getBooks = function(filters, cb) {
            $http.get('book.json').success(function(data) {
                var result;
                data = _.filter(data, function(item){
                    return item.genre.category == filters.category;
                });
                result = _.filter(data, function(item){
                    return item.genre.name == filters.type;
                });
                cb(result);
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
