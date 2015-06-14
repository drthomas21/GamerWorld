var config = {
		backend: "https://dev.gamerworld.com:8008"
};
var app = angular.module("rpzone",['ngCookies','ngRoute','ngSanitize','ui.bootstrap'])
	.config(function($routeProvider, $locationProvider) {
		$routeProvider
			.when('/clans', {
				templateUrl: '/view/clans'
			})
			.when('/guilds', {
				templateUrl: '/view/clans'
			})
			.when('/login', {
				templateUrl: '/view/login'
			})
			.when('/', {
				templateUrl: '/view/homepage'
			});
		
		$locationProvider.html5Mode(true);
			
	});

function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

function validateEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
}