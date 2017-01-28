(function() {
  mod = angular.module("LunchCheck", [])
mod.controller("WordCalculator", function($scope) {
  $scope.inputText = ""
  $scope.val = ""

  $scope.calculateResult = function () {

    if ($scope.inputText == "") {
      $scope.val = "Please enter data first"
      return 0
    }
    var wordSplit = $scope.inputText.split(",")
    var wordCount = wordSplit.length;
    console.log(wordSplit)
    console.log(wordCount)
    if ((wordCount <=3) && (wordCount >0)){
      $scope.val = "Enjoy!"
    }
    else {
      $scope.val = "Too much!"
    }
  };
});
})();
