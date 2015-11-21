// Code goes here
var app = angular.module('littleApp', [])

app.controller('mainCtrl', function($scope,$document) {
  
  var letters = [
    'Q','W','E','R','T','Y','U','I','O','P',
     'A','S','D','F','G','H','J','K','L',';',
      'Z','X','C','V','B','N','M',' '];
  
  $scope.things = letters.map(function(ltr){
    return {'title': ltr, 'display': ltr, 'active': false}
  })  

  $document.bind('keydown',function(e){
    var idxOfLetter = letters.indexOf(String.fromCharCode(e.keyCode))
    if (e.which === 186){
      idxOfLetter = letters.indexOf(';');
    }
    if ($scope.things[idxOfLetter]){
      $scope.$apply($scope.setActive($scope.things[idxOfLetter]))
    }
  })
  
  $document.bind('keyup',function(e){
    var idxOfLetter = letters.indexOf(String.fromCharCode(e.keyCode))
    if (e.which === 186){
      idxOfLetter = letters.indexOf(';');
    }
    if ($scope.things[idxOfLetter]){
      $scope.$apply($scope.clearActive($scope.things[idxOfLetter]))
    }
  })

  $scope.setActive = function(thing) {
    thing.active = true;
  };
  $scope.clearActive = function(thing){
    thing.active = false;
  }
})