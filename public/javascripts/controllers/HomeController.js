angular.module('HomeCtrl', [])
.controller('HomeController', function ($scope, $http, $location, $rootScope, Logout) {
	 if ($rootScope.currentUser!==0)
	 {$scope.logout = function()
          {
            Logout.LogoutUser().success(function(){
                $rootScope.currentUser = null;
                $location.url("/");
            })
          } 
	}
});
