angular.module('Controllers')
    .controller('ContactController', ['$scope',function ($scope, Helper) {
		$scope.contact = {};
		$scope.addContact = function(contact){

			Visualforce.remoting.Manager.invokeAction(
				'gerdev.ContactControllerExtension.createContact',
				'gfleitas', '5abd06d6f6ef0e022e11b8a41f57ebda', contact.firstName, contact.lastName,
				function(result, event) {
					$scope.$apply(function() {
					alert(result);
				});
			});
		};
    }]);
