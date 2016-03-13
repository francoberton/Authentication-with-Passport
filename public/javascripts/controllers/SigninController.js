angular.module('SigninCtrl', [])
.controller('SigninController', function ($scope,$http, $location,$rootScope,Signin) {	
	$scope.signin = function(user){
		if( !user.username || user.username.length < 1|| !user.pwd || user.pwd.length < 1) return;
		var userJSON = {username: user.username, password: user.pwd}
		Signin.SigninUser(userJSON).success(function(user){
			$rootScope.currentUser = user;
			$location.path("/");
			})
	  	}	
 });
