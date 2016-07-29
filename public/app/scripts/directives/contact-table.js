angular
    .module('contactListApp')
    .directive('contactTable', function factory(){
      return {
        restrict: 'E',
        replace: true,
        templateUrl: '../../app/templates/contact-table.html',
        scope:{
            contactList: "=info"
        },
          controller: 'MainCtrl',
          controllerAs: 'main',
          bindToController: true,

        link: function(scope, element, attrs) {
            (function(name) {
                scope.main.contactList.selected = {};
            })();

            scope.deleteItem = function(id){
              scope.main.contactList.contact.splice(id, 1);
            };
            scope.editItem = function(contact){
                scope.main.contactList.selected = angular.copy(contact);
            };
            scope.saveItem = function(id){
                scope.main.contactList.contact[id] = angular.copy(scope.main.contactList.selected);
                scope.resetSelectedItem();
            };
            scope.resetSelectedItem = function(){
                scope.main.contactList.selected = {};
            };
            scope.getTemplate = function (contact){
                if (contact.id === scope.main.contactList.selected.id) return 'edit';
                else return 'display';
            };
        }
    }
  });
