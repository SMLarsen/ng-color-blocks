colorBlocks.controller('SettingsController', ['$scope', 'DataFactory', function($scope, DataFactory) {
  console.log("settings controller running");

  var self = this;
  self.colors = DataFactory.colors;
  self.colorArray = DataFactory.colorArray;
  self.newColor = '';

  self.addColor = function() {
    console.log(self.newColor);
    DataFactory.addColor(self.newColor);
  };

  self.removeColor = function(index) {
    DataFactory.removeColor(index);
  };

  self.changeColor = function(index, color) {
    console.log('update');
    DataFactory.changeColor(index, color);
  };

}]);
