angular.module('Directives')
    .directive('contactEdit', [function() {
        return {
            restrict: 'E',
            replace: false,
            templateUrl: 'assets/templates/contact-edit.html',
            link: function(scope, element, attrs) {

            }
        };
    }])
