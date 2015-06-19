var config = {
		backend: "http://"+window.location.host+":8008"
};
var app = angular.module("rpzone",['ngCookies','ngRoute','ngSanitize','ui.bootstrap'])
	.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
		$locationProvider.html5Mode({enabled: true,requireBase: false}).hashPrefix('!');
		$routeProvider
		.when('/',{
			templateUrl: 'view/home',
			controller: 'HomepageController'
		})
		.when('/login', {
			templateUrl: 'view/login',
			controller: 'LoginController'
		})
		.when('/profile', {
			templateUrl: 'view/profile',
			controller: 'ProfileController'
		})
		
		.otherwise({
			redirectTo: '/'
		});
	}]);

function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

function validateEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
}