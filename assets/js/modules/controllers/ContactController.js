angular.module('Controllers')
    .controller('ContactController', ['$scope',function ($scope, Helper) {
		var namespace = 'gerdev.ContactControllerExtension.';
		var functionListUsers = namespace + 'listUsers';
		var functionCreateContact = namespace + 'createContact';

		$scope.contacts = [];
		$scope.contact = {};
		$scope.cosa = 1;

		Visualforce.remoting.Manager.invokeAction(
			functionListUsers,
			JSON.parse(sessionStorage.getItem('loggedUser')).Username,
			JSON.parse(sessionStorage.getItem('loggedUser')).AuthToken,
			function(result, event) {
				$scope.$apply(function() {
					$scope.contacts = result;
			});
		});

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

		/* $scope.editContact = function(contact){
			alert(contact.FirstName);
			alert($scope.contact.FirstName);
			alert($scope.cosa++);
		}; */


		/* $scope.setContact = function(c){
			$scope.setContactFirstName(c.FirstName);
			$scope.setContactLastName(c.LastName);
		};
		$scope.setContactFirstName = function(firstName){
			$scope.contact.FirstName = firstName;
			alert($scope.contact.FirstName);
			
		};

		$scope.setContactLastName = function(lastName){
			$scope.contact.LastName = lastName;
			alert($scope.contact.LastName);
		}; */
    }]);
