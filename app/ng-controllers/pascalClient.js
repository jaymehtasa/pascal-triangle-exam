angular.module("PascalExam")
	.controller("pascalClient", function ($scope, Pascal) {
		$scope.onPascalRowChange = function () {
			var rows = 0
			if($scope.ptRows != null && $scope.ptRows != ""){
				rows = parseInt($scope.ptRows);
			}
			if (!isNaN(rows) && rows > 0) {
				$scope.pascalRows = Pascal.getTriangle(rows);
			}else{
				$scope.pascalRows = [];
			}
		}
	})