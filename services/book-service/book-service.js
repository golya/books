books.service('bookService', ['$http',
    function($http) {
        this.getBooks = function(filters, cb) {
            $http.get('book.json').success(function(data) {
                var result = _.filter(data, function(item){
                    return item.genre.category == filters.category && item.genre.name == filters.type;
                });
                cb(result);
            });
        };

        this.search = function(search, cb) {
            $http.get('book.json').success(function(data) {
                var result = _.filter(data, function(item){
                    return _.includes(item.author.name.toLowerCase(), search.toLowerCase())
                        || _.includes(item.name.toLowerCase(), search.toLowerCase()) ;
                });
                cb(result);
            });
        };

        this.getRecommendations = function(cb) {
            $http.get('book.json').success(function(data) {
                cb(_.sample(data, 3));
            });
        };

        this.getBook = function(id, cb) {
            $http.get('book.json').success(function(data) {
                book = _.find(data, {"id": id});
                cb(book);
            });
        };

        this.getFilterTypes = function(cb) {
            var filters = {'categories': [], 'types': []};
            filters.default = {'category': 'Fiction', 'type': 'Fantasy'};

            $http.get('book.json').success(function(data) {
                _.map(data, function (item) {
                    filters.categories.push(item.genre.category);
                    filters.types.push(item.genre.name);
                });
                filters.categories = _.uniq(filters.categories);
                filters.types = _.uniq(filters.types);

                cb(filters);
            });
        };
    }
]);
