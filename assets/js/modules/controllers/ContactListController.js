angular.module('Controllers')
    .controller('ContactListController', ['$scope', function ($scope, Helper) {
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
    }]);
