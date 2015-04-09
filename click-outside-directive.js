'use strict';

App.directive('clickOutside', function ($window, $parse) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            var clickOutsideHandler = $parse(attrs.clickOutside);

            angular.element($window).on('click', function (event) {
                if (element[0].contains(event.target)) return;
                
                clickOutsideHandler(scope, {$event: event});
                scope.$apply();
            });
        }
    };
});
