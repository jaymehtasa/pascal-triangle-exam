angular.module("PascalExam")
	.directive('pascalTriangle', function () {
		return {
			restrict: 'EA',
			replace: true,
			templateUrl: 'templates/pascal-triangle.html',
			scope: {
				pascalRows : "="
			},
			link: function (scope, element, attr, ngModelCtrl) {

			}
		};
    });