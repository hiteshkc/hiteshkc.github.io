mod = angular.module("LunchCheck", [])
mod.controller("WordCalculator", function($scope) {
  $scope.inputText = "enter something"
  $scope.val = ""

  $scope.calculateResult = function () {
    if ($scope.inputText == "") {
      $scope.val = "Please enter data first"
      return
    }
    var wordSplit = $scope.inputText.split(",")
    var wordCount = wordSplit.length;
    console.log(wordSplit)
    console.log(wordCount)
    if ((wordCount <=3) && (wordCount >0)){
      $scope.val = "Enjoy!"
    }
    else if (wordCount == 0){
      $scope.val = "Please enter data first"
    }

    else {
      $scope.val = "Please enter data first"
    }
  };
});
