angular.module('Directives')
    .directive('logoutButton', [function() {
        return {
            restrict: 'E',
            replace: false,
            templateUrl: 'assets/templates/logout-button.html',
            link: function(scope, element, attrs) {

            }
        };
    }])
