function Car(year, make, model) {
  var self = this; // sometimes written as var that = this;
  self.year = year;
  self.make = make;
  self.model = model;
  self.quartsOfOil = 5;
  self.engineStarted = false;

  function drainOldOil() {
    console.log('this is ' + this);
    console.log(self.quartsOfOil + ' quarts of oil drained.');
  }

  function addNewOil() {
    console.log(self.quartsOfOil + ' quarts of oil added.');
  }

  self.changeOil = function () {
    if (self.engineStarted) {
      console.error("You can't change the oil with the car running!");
    } else {
      drainOldOil();
      addNewOil();
    }
  }
}

Car.prototype.startEngine = function () {
  this.engineStarted = true;
  console.log('Started the engine of the ' + this.year + ' ' + this.make + ' ' + this.model + ' car.');
};

Car.prototype.stopEngine = function () {
  this.engineStarted = false;
  console.log('Stopped the engine of the ' + this.year + ' ' + this.make + ' ' + this.model + ' car.');
};
