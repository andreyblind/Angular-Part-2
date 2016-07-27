angular
    .module('contactListApp')
    .directive('contactTable', function(){
      return {
        restrict: 'E',
        replace: true,
        scope:{
          arr: '='
        },
        templateUrl: '../../static/app/templates/contact-table.html',
        controller: 'MainCtrl',
        link: function(scope, element, attrs) {
          //console.log(scope.arr[0]);
        }
    }
  });