angular.module('SignupService', [])
.factory('Signup', function($http){
    return {
	SignupUser: function(user){
		return $http.post("/signup/",user);
		}
	};
})
