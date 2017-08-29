angular.module('Services').service('ContactService', ['$q', function ($q) {
    var namespace = 'gerdev.ContactControllerExtension.';
    var functionCreateContact = namespace + 'createContact';
    var functionCreateContact = namespace + 'editContact';
    var functionListUsers = namespace + 'listUsers';

    this.addContact = function(contact, scope){
        Visualforce.remoting.Manager.invokeAction(
            functionCreateContact,
            JSON.parse(sessionStorage.getItem('loggedUser')).Username,
            JSON.parse(sessionStorage.getItem('loggedUser')).AuthToken,
            contact.FirstName, contact.LastName,
            function(result, event) {
                scope.$apply(function() {
                    scope.contact = {};
                    alert(result);
            });
        });
    };
    
    this.editContact = function(contact, scope){
        Visualforce.remoting.Manager.invokeAction(
            functionCreateContact,
            JSON.parse(sessionStorage.getItem('loggedUser')).Username,
            JSON.parse(sessionStorage.getItem('loggedUser')).AuthToken,
            contact.Id, contact.FirstName, contact.LastName,
            function(result, event) {
                scope.$apply(function() {
                    scope.contact = {};
                    alert(result);
            });
        });
    };

    this.listUsers = function(scope){
        Visualforce.remoting.Manager.invokeAction(
            functionListUsers,
            JSON.parse(sessionStorage.getItem('loggedUser')).Username,
            JSON.parse(sessionStorage.getItem('loggedUser')).AuthToken,
            function(result, event) {
                scope.$apply(function() {
                    scope.contacts = result;
            });
        });
    };
}]);
