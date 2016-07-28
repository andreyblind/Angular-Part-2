angular
    .module('contactListApp')
    .directive('contactTable', function(){
      return {
        restrict: 'E',
        replace: true,
        templateUrl: '../../app/templates/contact-table.html',
        scope:{
            contactList: "="
        },

        link: function(scope, element, attrs) {
            scope.deleteItem = function(id){
              scope.contactList.contact.splice(id, 1);
            };
            scope.editItem = function(id){
                scope.contactList.selected = scope.contactList.contact[id];
            };
            scope.saveItem = function(id){
                scope.contactList.contact[id] = scope.contactList.selected;
                console.table(scope.contactList.selected)
                //console.table(scope.contactList.contact[id]);
            };
            scope.resetSelectedItem = function(){
                scope.contactList.selected = {};
            }
            scope.getTemplate = function (contact){
                if (contact.id === scope.contactList.selected.id) return 'edit';
                else return 'display';
            };
            scope.test = function(){
                scope.contactList.contact[0] = {id: 0, firstName: 'Пе', lastName: 'Шевч', email: 'p.shevchemko@gmail.com'};
            }

            scope.contactList = {
        contact:[
            {id: 0, firstName: 'Петр', lastName: 'Шевченко', email: 'p.shevchemko@gmail.com'},
            {id: 1, firstName: 'Иван', lastName: 'Чумак', email: 'chumak777@.iua'},
            {id: 2, firstName: 'Сергей', lastName: 'Булашенко', email: 's.bul@bigmir.net'},
            {id: 3, firstName: 'Митрофан', lastName: 'Чернов', email: 'm.chernov@gmail.com'},
            {id: 4, firstName: 'Автандил', lastName: 'Варсимашвили', email: 'аvtandil@gmail.com'},
            {id: 5, firstName: 'Ибрагим', lastName: 'Оглы', email: 'i.ogly@mail.ru'},
            {id: 6, firstName: 'Джон', lastName: 'Сноу', email: 'bastard@gmail.com'},
            {id: 7, firstName: 'Конор', lastName: 'Макгрегор', email: 'conor@ufc.com'}
        ],
        selected: {}
    }
        }
    }
  });
