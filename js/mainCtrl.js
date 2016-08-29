//
angular.module('friendsList').controller('mainCtrl',function($scope){

  $scope.name = 'Pepper';

  $scope.friends = ['paul','john','george','ringo'];

  $scope.friendsName;

  $scope.addFriend = function(name) {
    if($scope.friendsName !== ''){
      $scope.friends.push(name);
      $scope.friendsName = '';
    }
  }


});
