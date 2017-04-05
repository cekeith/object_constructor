// New Car Constructor

function createCar(newMake, newModelYear, newColor) {
  // var car = {}
  return {
    make: newMake,
    modelYear: newModelYear,
    color: newColor,
    getData: function() {
      return this.make + "," + this.modelYear + "," + this.color }
   }
}

// Acceleration, brake and speed

function raceCar(speed) {
  // var speed = 0
  return {
    getData: function() { return speed },
    increase: function() { speed += 10 },
    decrease: function() { speed -= 7 }
   }
}

// Speed loop with decrease of speed

function raceCar(x) {
  // var speed = 0
  for (x = x; x > 85 || x < 0; x= prompt("enter valid number")) {
    console.log("Invalid")
  } return {
    getData: function() { return parseInt(x) },
    decrease: function() {
      while(x > 0) {
        x--
      }
    },
    increase: function() {
      while(x < 85) {
        x++
      }
    }
  }
}

//random braking iteration challenge

function raceCar(x) {
  // var speed = 0
  for (x = x; x > 85 || x < 0; x= prompt("enter valid number")) {
    console.log("Invalid")
  } return {
    getData: function() { return parseInt(x) },
    decrease: function() {
      while(x > 0) {
        x--
      }},
      brake: function() {
        var y = (Math.floor(Math.random()* x/2))
        while(y > x/2) {
          y = (Math.floor(Math.random()* x/2))
        } x = x - y
      },
        increase: function() {
          while(x < 85) {
            x++
          }
        }
      }
    }
