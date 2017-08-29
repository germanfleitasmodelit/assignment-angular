angular.module('Directives')
    .directive('contactEdit', [function() {
        return {
            restrict: 'E',
            replace: false,
            templateUrl: 'assets/templates/contact-edit.html',
            scope: {
                contact: '='
            },
            controller: function ($scope) {
                var functionCreateContact = 'gerdev.ContactControllerExtension.editContact';
        
                $scope.editContact = function(contact){
                    Visualforce.remoting.Manager.invokeAction(
                        functionCreateContact,
                        JSON.parse(sessionStorage.getItem('loggedUser')).Username,
                        JSON.parse(sessionStorage.getItem('loggedUser')).AuthToken,
                        contact.Id, contact.FirstName, contact.LastName,
                        function(result, event) {
                            $scope.$apply(function() {
                                $scope.contact = {};
                                alert(result);
                        });
                    });
                };
            }
        };
    }])
