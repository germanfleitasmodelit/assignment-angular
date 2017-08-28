angular.module('Directives')

	// Utilities is being injected (dependency injection), for being used in this directive. It could be a service, factory, etc.
    .directive('userDataFields', [function() {
        return {
            restrict: 'E',
            replace: false,
            templateUrl: 'assets/templates/user-data-fields.html',
            link: function(scope, element, attrs) {

            }
        };
    }])
