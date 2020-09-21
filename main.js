//1.
const person = [{ name: "Jill" }, { name: "" }, { name: "Bob" }];
//create a function 'greeting' that maps through the array.
// Use a ternary.
// If there is a name it should say 'Hello <name>' otherwise it should say,
// 'Hello Stranger'.

const greeting = function(arr) {
  return arr.map(greet => greet.name === "" ? console.log("Hello Stranger") : console.log(`Hello ${greet.name}`)); //?
}

greeting(person); //?

//2.
///Create a function that uses ternary to decide whether the person can drive
// If they are below 15 then log 'cannot drive', if they are 15 then log 
//  'can drive with a parent', if they are 16 or above then 'yes they can drive'

const canDrive = function(age) {
  return (age < 15) ? console.log('cannot drive')
    : (age === 15) ? console.log('with parent')
    : console.log('can drive');
}

canDrive(13) //?


//3.
// create a variable speedMessage that has a value resulting from a ternary
// if the speed equals 70 it should say '70 is the perfect speed'
// if the speed is greater than or equal to 90 it should say 'Are you trying to get us killed'
// if the speed is less than 50 it should have the value 'Faster please'
// if speed is less than 10 it should say you should not drive
// create a variable allowableSpeed that sets a speed based on the range of numbers that are 
//  left. so...if allowableSpeed is set to a number in that range your default output should 
//  be `<speed> is a decent speed`
// ---

const speed = function(num) {
  return (num === 70) ? console.log('70 is the perfect speed')
    : (num >= 90) ? console.log('Are you trying to get us killed')
    : (num < 10) ? console.log('You should not drive')
    : (num < 50) ? console.log('Faster please')
    : console.log(`${num} is a decent speed`);
  }

  speed(90)

//4. 
// map through an array and if the value is greater than 50 it goes in the arr1
//if the array is less than 50 it goes in arr2
// if the value is a string arr3
//floating point numbers should only have 2 decimal places with the exact numbers not rounded
//use ternary
// use an array method BUT do not return a data structure when you iterate through your items.
// OUTPUT:
//[ 445, 4555 ][ 22, 33.99, 1, 44.98 ] [ 'peaches', 'apple' ]
let arr = [
    'peaches',
    444.7,
    22,
    undefined,
    33.99999,
    null,
    1,
    'apple',
    4555,
    undefined,
    NaN,
    44.98999,
  ]
  let arr1 = []
  let arr2 = []
  let arr3 = []
  
  const sort = function(arr) {
    arr.map(element => {
      (element > 50) ? arr1.push(Math.floor(element * 100) / 100)
      : (element <= 50 && element != null) ? arr2.push(Math.floor(element * 100) / 100)
      : (typeof element === 'string') ? arr3.push(element)
      : undefined;
    })
  }
  
  sort(arr)

  console.log(arr1) //?
  console.log(arr2) //?
  console.log(arr3)
  
// Object Methods:
// 5. Use object methods to solve problem
// Write a method that doubles the price of each item in the prices object and place those values in a new object called priceDoubler

let prices = {
  cigarettes: 5.99,
  coke: { lg: 2.99, sm: 1.99 },
  chips: 2.79,
};

const double = function(obj) {
  // oldKeys = Object.keys(obj) //?
  const priceDoubler = {};
  obj.reduce((accu, thing) => () //?
}

console.log(double(prices))
// newObj.cigarettes = prices.cigarettes * 2
// newObj.coke.lg = 