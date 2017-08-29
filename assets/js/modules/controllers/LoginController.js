angular.module('Controllers')
    .controller('LoginController', ['$scope', '$location', function ($scope, $location, Helper) {
		var functionUserLogin = 'gerdev.MainController.userLogin';
		var functionValidateToken = 'gerdev.MainController.validateToken';
		$scope.user = {};

		$scope.logoutUser = function(){
			sessionStorage.clear();
			$location.path('/login');
		};

		$scope.loginUser = function(user){
			Visualforce.remoting.Manager.invokeAction(
				functionUserLogin,
				user.Username, user.Password,
				function(result, event) {
					$scope.$apply(function() {
						if(result != null){
							var loggedUser = {
								Username: user.Username,
								AuthToken: result
							};

							sessionStorage.setItem("loggedUser", JSON.stringify(loggedUser));
							$location.path('/home');
						}
						
						$scope.user = {};
				});
			});
		};
    }]);
