angular.module('Directives')
    .directive('contactList', ['ContactService', function(ContactService) {
        return {
            restrict: 'E',
            replace: false,
            templateUrl: 'assets/templates/contact-list.html',
            controller: function ($scope) {
                $scope.contacts = [];
        
                ContactService.listUsers($scope);

                $scope.selectContact = function(contact){
                    $scope.contact = contact;
                };
        
                $scope.isSelected = function(contact){
                    return $scope.contact === contact;
                };
            }
        };
    }])
