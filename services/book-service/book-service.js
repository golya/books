books.service('bookService', ['$http',
    function($http) {

        function filter(query) {
            return function(item){
                return item.genre.category == query.category && item.genre.name == query.type;
            };
        };

        function search(query) {
            return function(item) {
                return _.includes(item.author.name.toLowerCase(), query.search.toLowerCase())
                    || _.includes(item.name.toLowerCase(), query.search.toLowerCase()) ;
            };
        };

        this.getBooks = function(query, start, cb) {
            var filterFunction = filter(query);
            if ('search' in query && query.search != '') {
                filterFunction = search(query);
            }

            $http.get('book.json').success(function(data) {
                var result = _.filter(data, filterFunction);
                cb(_.slice(result, start=start, end=start+10));
            });
        };

        this.getRecommendations = function(query, cb) {
            $http.get('book.json').success(function(data) {
                var result = _.filter(data, filter(query));
                cb(_.sample(result, 3));
            });
        };

        this.getBook = function(id, cb) {
            $http.get('book.json').success(function(data) {
                book = _.find(data, {'id': id});
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
