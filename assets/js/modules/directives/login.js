angular.module('Directives')
    .directive('login', [function() {
        return {
            restrict: 'E',
            replace: false,
            templateUrl: 'assets/templates/login.html',
            link: function(scope, element, attrs) {

            }
        };
    }])
