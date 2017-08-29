angular.module('Directives')
    .directive('menu', [function() {
        return {
            restrict: 'E',
            replace: false,
            templateUrl: 'assets/templates/menu.html',
            controller: function ($scope) {
                $scope.tab = 1;
        
                $scope.selectTab = function(setTab){
                    $scope.tab = setTab;
                }
        
                $scope.isSelected = function(checkTab){
                    return $scope.tab === checkTab;
                }
            },
            link: function(scope, element, attrs) {

            }
        };
    }])
