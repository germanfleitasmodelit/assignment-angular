angular.module('Directives')
    .directive('contactCreate', [function() {
        return {
            restrict: 'E',
            replace: false,
            templateUrl: 'assets/templates/contact-create.html',
            controller: 'ContactCreateController',
            link: function(scope, element, attrs) {

            }
        };
    }])
