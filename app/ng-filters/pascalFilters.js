angular.module("PascalExam")
	.filter('filterPtRow', function () {
        return function (values) {
            return values.join(', ');
        };
    })
	.filter('filterPtRowColor', function () {
        return function (index) {
			var colors = ['red', 'blue', 'orange', 'green'];
            return colors[index % colors.length];
        };
    })