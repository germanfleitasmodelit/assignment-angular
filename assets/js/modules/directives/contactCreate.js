angular.module('Directives')
    .directive('contactCreate', [function() {
        return {
            restrict: 'E',
            replace: false,
            templateUrl: 'assets/templates/contact-create.html',
            controller: function ($scope) {
                var functionCreateContact = 'gerdev.ContactControllerExtension.createContact';
                $scope.contact = {};
        
                $scope.addContact = function(contact){
                    Visualforce.remoting.Manager.invokeAction(
                        functionCreateContact,
                        JSON.parse(sessionStorage.getItem('loggedUser')).Username,
                        JSON.parse(sessionStorage.getItem('loggedUser')).AuthToken,
                        contact.FirstName, contact.LastName,
                        function(result, event) {
                            $scope.$apply(function() {
                                $scope.contact = {};
                                alert(result);
                        });
                    });
                };
            },
            link: function(scope, element, attrs) {

            }
        };
    }])
