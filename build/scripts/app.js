var myApp = angular.module('myApp', []);

myApp.controller('myController', myController);
function myController ($scope) {
	console.log("hrllo");
	console.log($scope);
}


myApp.controller('listController', myList);
function myList($scope) {
	console.log('list initaied');
	$.ajax({
		url: "https://hackerearth.0x10.info/api/problems?type=json&query=list_problems",
		success: function(data) {
			console.log(JSON.parse(data));
		}
	});
}

myApp.directive('list-item', defineListItem);
function defineListItem () {
	return {
		restrict: 'EA',
		template: "<div><a>{{name}}</a><a>{{rating}}</a></div>"
	};
}
