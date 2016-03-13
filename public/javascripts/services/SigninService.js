angular.module('SigninService', [])
.factory('Signin', function($http){
   return {
	SigninUser: function(user){
		return $http.post("/signin/",user);
		}
	};
})
