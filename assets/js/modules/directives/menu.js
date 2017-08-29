angular.module('Directives')
    .directive('menu', [function() {
        return {
            restrict: 'E',
            replace: false,
            templateUrl: 'assets/templates/menu.html',
            controller: 'MenuController',
            link: function(scope, element, attrs) {

            }
        };
    }])
