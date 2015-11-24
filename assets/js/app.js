(function(){
	var app = angular.module('landingPage',['ngDialog']);
	app.config(function($httpProvider) {
      //Enable cross domain calls
      $httpProvider.defaults.useXDomain = true;
      //Remove the header used to identify ajax call  that would prevent CORS from working
      delete $httpProvider.defaults.headers.common['X-Requested-With'];
  });
	app.controller('MainCtrl',function($scope, ngDialog){
		$scope.clickToOpen = function (){
			console.log("I reached here");
			ngDialog.open({ url: 'http://www.google.com'});
		};
	});
	app.controller('VideoCtrl',function($scope){
		$scope.w = $(window).width();
		$scope.w = String($scope.w);
	});
	app.controller('MenuCtrl',function($scope){
		$scope.show = true;
		$scope.showMe = function(){
			$scope.show = !$scope.show;
			console.log($scope.show);
		};
	});
	app.controller('FromSubmit', ['$scope','$http', function($scope, $http, transformRequestAsFormPost){
		$scope.post = function(names,emails) {
			if ($scope.signupForm.$valid){
				$http.post("http://plugzee-signup.herokuapp.com/new", { name: names, email: emails }).success(function(result) {
					console.log(result);
					$scope.resultPost = result;
					console.log("*********")
					$scope.result = true;
				}).error(function() {
					console.log("error");
				});
			} else {
				console.log("Error");
			}
		};
		$scope.again = function(){
			$scope.result = false;
		};
	}]);

	app.directive('ngAnimation',function(){
		return {
			restrict: 'A',
			require: '^ngModel',
			scope:{
				ngModel: '=',
				ngWidth: '@',
			},
			template:'<div id="player-target" anm-player-target anm-src="http://clips.animatron.com/9d2aa5da1421219c96c9684a3835846a.json" anm-importer="animatron" anm-width="{{ngWidth-10}}" anm-height="400" anm-rib-color="#81d5f2" anm-bg-color="#81d5f2" anm-auto-play="true" anm-controls="false" ></div>'
		}
	});
})();