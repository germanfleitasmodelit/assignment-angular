angular.module('Directives')
    .directive('contactEdit', ['ContactService', function(ContactService) {
        return {
            restrict: 'E',
            replace: false,
            templateUrl: 'assets/templates/contact-edit.html',
            scope: {
                contact: '='
            },
            controller: function ($scope) {
        
                $scope.editContact = function(contact){
                    ContactService.editContact(contact, $scope);
                };
            }
        };
    }])
