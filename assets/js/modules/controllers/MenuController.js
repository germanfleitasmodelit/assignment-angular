angular.module('Controllers')
    .controller('MenuController', ['$scope',function ($scope, Helper) {
		//$scope.model = {};
		$scope.tab = 1;

		$scope.selectTab = function(setTab){
			$scope.tab = setTab;
		}

		$scope.isSelected = function(checkTab){
			return $scope.tab === checkTab;
		}
    }]);
