function MainController ($scope) {

	$scope.clicks = 0;
	$scope.likes = "likes"

	$scope.addLikes = function () {
		$scope.clicks++;
		if ($scope.clicks === 1){
			$scope.likes = "like"
		} else {
		console.log($scope.clicks)
			$scope.likes = "likes"
		}
	}


} 


MainController.$inject = ["$scope"];
export { MainController };