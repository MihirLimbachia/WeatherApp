weatherApp.controller('homeController',['$scope','$location','cityService',function($scope,$location,cityService){
	$scope.city=cityService.city;
	
	$scope.$watch('city',function(){
		cityService.city=$scope.city;
	});
	$scope.submit=function(){
		$location.path("/forecast");
	};
}]);
weatherApp.controller('forecastController',['$scope','$resource','cityService','$routeParams','weatherService',function($scope,$resource,cityService,$routeParams,weatherService){
	$scope.city=cityService.city;
	$scope.days=$routeParams.days || 2;
	
	$scope.weatherResult=weatherService.getWeather($scope.city,$scope.days);
	
	$scope.convert=function(degK){
		return Math.round((degK-273)*10)/10;
	}
	$scope.convertDate=function(date){
		return new Date(date*1000);
	}
}]);
