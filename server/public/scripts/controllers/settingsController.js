colorBlocks.controller('SettingsController', ['$scope', 'DataFactory', function($scope, DataFactory) {
  console.log("settings controller running");

  var self = this;
  self.colors = DataFactory.colors;
  self.colorArray = DataFactory.colorArray;
  self.newColor = '';

  self.addColor = function() {
    console.log(self.newColor);
    DataFactory.colors.push(self.newColor);
  };
}]);
