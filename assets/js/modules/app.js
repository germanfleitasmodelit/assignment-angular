(function() {
    var App = angular.module('AngularBoilerplate', ['ngRoute', 'ui.bootstrap', 'Controllers', 'Directives', 'Factories', 'Filters', 'Services']);
    
    App.config(['$routeProvider', function ($routeProvider) {

        $routeProvider
        .when('/login', {
            templateUrl: 'assets/templates/pages/login.html',
            controller: 'LoginController'
        })

        .when('/home', {
            templateUrl: 'assets/templates/pages/home.html',
            controller: 'HomeController'
        })

        .when('/contact/create', {
            templateUrl: 'assets/templates/pages/contact-create.html',
            controller: 'CreateController'
        })

        .when('/contact/edit', {
            templateUrl: 'assets/templates/pages/contact-edit.html',
            controller: 'EditController'
        })
        
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
         });
})();
