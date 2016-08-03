angular.module("PascalExam")
	.factory("Pascal", function () {
		return {
			// REF: https://gist.github.com/kgates-github/4695492
			getTriangle: function (n, a) {
				if(a == undefined){
					a = [[1]];
				}
				var result = [];
				if (n < 2) return a; // We already have the top row

				var prevTier = a[a.length - 1];
				var curTier = [1];

				for (var i = 1; i < prevTier.length; i++) {
					curTier[i] = prevTier[i] + prevTier[i - 1];
				}
				curTier.push(1);
				a.push(curTier);

				return this.getTriangle(n - 1, a);
			}
		}
	});