angular.module("PascalExam")
	.controller("pascalClient", function ($scope, Pascal, $sessionStorage) {
		$scope.onPascalRowChange = function () {
			var rows = 0;
			$scope.msg = ""
			if($scope.ptRows != null && $scope.ptRows != ""){
				rows = parseInt($scope.ptRows);
			}
			if (!isNaN(rows) && rows > 0 && rows <= 100) {
				$scope.pascalRows = Pascal.getTriangle(rows);
			}else{
				$scope.msg = "Please enter value between 0 and 100"
				$scope.pascalRows = [];
			}
			$sessionStorage.ptRows = rows;
		}

		$scope.init = function () {
			$scope.ptRows = $sessionStorage.ptRows || 0;
			$scope.onPascalRowChange();
 		};
	})