mainApp.controller('Page', ['$scope', function($scope) {
	$scope.arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
	$scope.appendMore = function() {
		for(var i=0; i< 20; i++) {
			$scope.arr.push($scope.arr.length + 1);
		}
		
		if($scope.arr.length == 100) {
			$scope.continue = false;
		}
	}
}]);