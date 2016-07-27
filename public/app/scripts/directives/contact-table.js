angular
    .module('contactListApp')
    .directive('contactTable', function(){
      return {
        restrict: 'E',
        replace: true,

        templateUrl: '../../static/app/templates/contact-table.html',
        controller: 'MainCtrl',
        link: function(scope, element, attrs) {
            scope.deleteItem = function(id){
              scope.contactList.splice(id, 1);
              console.table(scope.contactList);
        };

        }
    }
  });