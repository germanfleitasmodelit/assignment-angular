(function() {
    var App = angular.module('AngularBoilerplate', ['ngRoute', 'ui.bootstrap', 'Controllers', 'Directives', 'Factories', 'Filters', 'Services']);
    
    App.config(['$routeProvider', function ($routeProvider) {

        $routeProvider.when('/', {
            templateUrl: 'assets/templates/pages/home.html',
            controller: 'HomeController'
        })

        /* .when('/create', {
            templateUrl: 'assets/templates/pages/create-contact.html',
            controller: 'ContactController',
            controllerAs: 'contactCtrl'
        })

        .when('/edit', {
            templateUrl: 'assets/templates/pages/edit-contact.html',
            controller: 'ContactController',
            controllerAs: 'contactCtrl'
        })
        
        .otherwise({ redirectTo: '/' }) */
        ;

    }]);

})();
