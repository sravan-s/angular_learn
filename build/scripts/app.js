var myApp = angular.module('myApp', []);

myApp.controller('myController', myController);
function myController ($scope) {
	console.log("hrllo");
	console.log($scope);
}


myApp.controller('listController', myList);
function myList($scope, $http) {
	var _this = this;
	$http({
	    url: "https://hackerearth.0x10.info/api/problems?type=json&query=list_problems",
	    method: "get"
	}).success(function(data, status, headers, config) {
	    $scope.problems = data.problems;
	}).error(function(data, status, headers, config) {
	    $scope.status = status;
	});
}

myApp.directive('listItem', defineListItem);

function defineListItem () {
	
	function linkage($scope, element, attrs) {
		
	};
	return {
		link: linkage,
		controller: function() {
			console.log("controler initated");
		},
		restrict: 'E',
		template: "<h3>List Item</h3><div><a>{{problem.name}}</a><a>{{problem.rating}}</a></div>"	
	};
}

myApp.factory('messenger', function () {
	var message = {};
	return message;
});