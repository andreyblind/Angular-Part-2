

angular
    .module('contactListApp')
    .controller('MainCtrl', function ($scope){
    $scope.contactList = {
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
  });
