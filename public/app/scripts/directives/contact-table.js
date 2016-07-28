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
            scope.deleteItem = function(id){
              scope.contactList.contact.splice(id, 1);
            };
            scope.editItem = function(contact){
                scope.contactList.selected = angular.copy(contact);
                console.table(scope.contactList.selected);
            };
            scope.saveItem = function(id){

                console.table(scope.contactList.selected);
                scope.contactList.contact[id] = angular.copy(scope.contactList.selected);
                scope.resetSelectedItem();

            };
            scope.resetSelectedItem = function(){
                scope.contactList.selected = {};
            };
            scope.getTemplate = function (contact){
                if (contact.id === scope.contactList.selected.id) return 'edit';
                else return 'display';
            };
            scope.test = function(){
                scope.contactList.contact[0] = {id: 0, firstName: 'Пе', lastName: 'Шевч', email: 'p.shevchemko@gmail.com'};
            }
        }
    }
  });
