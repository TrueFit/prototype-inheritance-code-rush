var Car = (function () {
  function drainOldOil(car) {
    console.log(car.quartsOfOil + ' quarts of oil drained.');
  }

  function addNewOil(car) {
    console.log(car.quartsOfOil + ' quarts of oil added.');
  }

  return {
    year: null,
    make: null,
    model: null,
    quartsOfOil:  5,
    engineStarted: false,

    changeOil: function () {
      if (this.engineStarted) {
        console.error("You can't change the oil with the car running!");
      } else {
        drainOldOil(this);
        addNewOil(this);
      }
    },

    startEngine: function () {
      this.engineStarted = true;
      console.log('Started the engine of the ' + this.year + ' ' + this.make + ' ' + this.model + ' car.');
    },

    stopEngine: function () {
      this.engineStarted = false;
      console.log('Stopped the engine of the ' + this.year + ' ' + this.make + ' ' + this.model + ' car.');
    }
  };
}());
