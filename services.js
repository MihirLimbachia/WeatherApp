weatherApp.service('cityService',function(){
	this.city="New York, NY";
});
weatherApp.service('weatherService',['$resource',function($resource){
	
	this.getWeather=function(city,days){
	var weatherAPI=$resource("http://api.openweathermap.org/data/2.5/forecast/daily?APPID=f439ef0576fbac762cf7ea549a2e9b54",{callback:"JSON_CALLBACK"},{get:{method:"JSONP"}});
	
	
	var results=weatherAPI.get({q:city,cnt:days});
	return results;	
	};
	}]);