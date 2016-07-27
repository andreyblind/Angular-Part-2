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
        link: function(scope, element, attrs) {
        }
    }
  });