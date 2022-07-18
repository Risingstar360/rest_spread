//Refactor the below to use the rest operator and arrow function:
function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
  }

  //1st attempt

function filterOutOdds1(...nums) {
    return nums.filter((n) => {
        return n % 2 === 0;
    });
}

//2nd attempt

const filterOutOdds3 = (...nums) => nums.filter(n => n % 2 === 0);

//Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.
//1st Attempt
function findMin(...nums) {
    return Math.min(...nums);
}

//2nd Attempt

const findMins = (...num) => Math.min(...num);

//mergeObjects
//Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.

//1st Attempt
const mergeObjects = (...obj) => obj.concat(...obj);

const mergeObjects2 = (obj1, obj2) => ({...obj1,...obj2});


//Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of additional arguments doubled.
const doubleAndReturnArgs = (arr, ...nums) => [...arr, ...nums.map(n => n*2)]; 


/** remove a random element in the items array
and return a new array without that item. */
const removeRandom = (items) => {
    let randomInt = Math.floor(Math.random() * items.length);
    return [...items.slice(0, randomInt), ...items.slice(randomInt+1)];
};


/** Return a new array with every item in array1 and array2. */
const extend = (array1, array2) => [...array1, ...array2];


/** Return a new object with all the keys and values
from obj and a new key/value pair */
const addKeyValue = (obj, key, val) => ({...obj, [key]: val});


/** Return a new object with a key removed. */
const removeKey = (obj, key) => {
    let newObj  = {...obj}
    delete newObj [key]
    return newObj;
}

/** Combine two objects and return a new object. */
const combine = (obj1, obj2) => ({...obj1, ...obj2});



/** Return a new object with a modified key and value. */
const update = (obj, key, val) => ({...obj, [key]: val});
