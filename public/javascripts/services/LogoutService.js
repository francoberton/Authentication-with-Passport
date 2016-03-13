angular.module('LogoutService', [])
.factory('Logout', function($http){
    return {
	LogoutUser: function(){
		return $http.get("/logout");
		}
	};
})
