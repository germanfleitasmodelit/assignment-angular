(function() {
    var App = angular.module('AngularBoilerplate', ['ngRoute', 'ui.bootstrap', 'Controllers', 'Directives', 'Factories', 'Filters', 'Services']);
    
    App.config(['$routeProvider', function ($routeProvider) {

        $routeProvider.when('/home', {
            templateUrl: 'assets/templates/pages/home.html',
            controller: 'HomeController'
        })

        .when('/login', {
            templateUrl: 'assets/templates/pages/login.html',
            controller: 'LoginController'
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
        })*/
        
        .otherwise({ redirectTo: '/home' })
        ;

    }])
    
    .run( function($rootScope, $location) {
            $rootScope.$on("$routeChangeStart", function(event, next, current) {
              if (sessionStorage.loggedUser == null) {
                $location.path("/login");
              }
              else if($location.path() === '/login'){
                $location.path("/home");
              }
            });
         })
})();
