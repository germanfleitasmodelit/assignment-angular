angular.module('Directives')
    .directive('contactList', [function() {
        return {
            restrict: 'E',
            replace: false,
            templateUrl: 'assets/templates/contact-list.html',
            controller: function ($scope) {
                var functionListUsers = 'gerdev.ContactControllerExtension.listUsers';
                $scope.contacts = [];
        
                Visualforce.remoting.Manager.invokeAction(
                    functionListUsers,
                    JSON.parse(sessionStorage.getItem('loggedUser')).Username,
                    JSON.parse(sessionStorage.getItem('loggedUser')).AuthToken,
                    function(result, event) {
                        $scope.$apply(function() {
                            $scope.contacts = result;
                    });
                });
        
                $scope.selectContact = function(contact){
                    $scope.contact = contact;
                };
        
                $scope.isSelected = function(contact){
                    return $scope.contact === contact;
                };
            }
        };
    }])
