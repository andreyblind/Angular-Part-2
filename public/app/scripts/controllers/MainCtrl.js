'use strict';

angular
    .module('contactListApp')
    .controller('MainCtrl', function ($scope){
    $scope.contactList = [
        {firstName: 'Петр', lastName: 'Шевченко', email: 'p.shevchemko@gmail.com'},
        {firstName: 'Иван', lastName: 'Чумак', email: 'chumak777@.iua'},
        {firstName: 'Сергей', lastName: 'Булашенко', email: 's.bul@bigmir.net'},
        {firstName: 'Митрофан', lastName: 'Чернов', email: 'm.chernov@gmail.com'},
        {firstName: 'Автандил', lastName: 'Варсимашвили', email: 'аvtandil@gmail.com'},
        {firstName: 'Ибрагим', lastName: 'Оглы', email: 'i.ogly@mail.ru'},
        {firstName: 'Джон', lastName: 'Сноу', email: 'bastard@gmail.com'},
        {firstName: 'Конор', lastName: 'Макгрегор', email: 'conor@ufc.com'},
    ];
    $scope.deleteItem = function(id){
        $scope.contactList.splice(id, 1);
        console.table($scope.contactList);
    };
        $scope.test = "true";
  });
