angular.module('Controllers')
    .controller('ContactCreateController', ['$scope',function ($scope, Helper) {
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
    }]);
