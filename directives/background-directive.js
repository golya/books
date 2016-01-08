books.directive('backgroundImage', function(){
    return function(scope, element, attrs){
        attrs.$observe('backgroundImage', function(url) {
            element.css({
                'background': 'url(' + url +') no-repeat center center',
                '-webkit-background-size': 'cover',
                '-moz-background-size': 'cover',
                '-o-background-size': 'cover',
                'background-size': 'cover'
            });
        });
    };
});
