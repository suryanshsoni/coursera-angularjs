(function(){
'use strict';

angular.module('LunchCheck',[])
.controller('LunchCheckController',LunchChecker);

LunchChecker.$inject=['$scope'];
function LunchChecker($scope){
  $scope.lunchmenu="";
  $scope.countMessage="";
  $scope.mycolor="";
  $scope.displayLunchMenu=function(){
    var count=countLunchMenu($scope.lunchmenu);
    $scope.countMessage=message(count);
    $scope.mycolor=computeColor(count);
  }
function computeColor(count){
  if(count==0){
    return "red";
  }
  else {
    return "green";
  }
}
function message(count){
  if(count==0){
    return "Place data first";
  }
  else if(count<4) {
    return "Enjoy!";
  }
  else {
    return "Too much!";
  }
}
function countLunchMenu(menu){
  if(menu){
    var count=0,i=0;
    var menuarray=menu.split(',');
    for(i=0;i<menuarray.length;i++){
      if(menuarray[i]){
        count++;
      }
    }
    return count;
  }
  else {
    return 0;
  }
}


}
})();
