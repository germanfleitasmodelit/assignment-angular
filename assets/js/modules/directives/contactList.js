angular.module('Directives')
    .directive('contactList', [function() {
        return {
            restrict: 'E',
            replace: false,
            templateUrl: 'assets/templates/contact-list.html',
            controller: 'ContactListController',
            link: function(scope, element, attrs) {

            }
        };
    }])
