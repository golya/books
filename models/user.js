books.factory('User', [
    function() {
        function User(data) {
            _.assign(this, data);
        }

        User.prototype.getPublishedDate = function () {
            return moment(this.published).fromNow();
        };

        User.build = function (data) {
            return new User(data);
        };
        return User;
    }
]);
