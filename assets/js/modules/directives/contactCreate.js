angular.module('Directives')
    .directive('contactCreate', ['ContactService', function(ContactService) {
        return {
            restrict: 'E',
            replace: false,
            templateUrl: 'assets/templates/contact-create.html',
            controller: function ($scope) {
                $scope.contact = {};
                $scope.addContact = function(contact){
                    ContactService.addContact(contact, $scope);
                };
            },
            link: function(scope, element, attrs) {

            }
        };
    }])
