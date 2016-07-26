angular
    .module('contactListApp', [])
    .directive('contactTable', contactTable)
    function contactTable($window) {
        return {
            restrict: 'E',
            transclude: true,
            link: function(scope, element, attrs) {

            },
            template: '<p>test succes</p>'
        };
    }
