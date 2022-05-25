// Accessing array elements by index. First and last element of array

let cars = ['BWM', 'Audi', 'Opel'];
let firstCar = cars[0];
let lastCar = cars[cars.length -1];

console.log(cars);
console.log(firstCar);
console.log(lastCar);

console.log(cars[3]); // undefined
console.log(cars[-1]); // undefined

// iterated arrays for loop

for (let car of cars){
    console.log(car);
};

// index of cars
for (let index in cars){
    console.log(cars[index]);
};

// changing and adding element in array

cars[1] = 'Aidi RS';
cars[3] = 'Honda';

cars.push('Renault');
cars.unshift('Audi', 'Lada'); // adds one or more elements to the beginning

console.log(cars);

// removing elements

cars.pop(); // remove last element
cars.shift(); // remove first element

console.log(cars);

// Changes the contents of an array by removin or replacing 

let nums = [1, 2, 3, 4, 5, 6];
nums.splice(1, 0, 2); // add 2 to index 1
console.log(nums);
nums.splice(1, 1, 19) // replace 1 element at index 1 
console.log(nums);
nums.splice(1, 1); // remove 1 element at index 1
console.log(nums); 
let coppyArray = nums.slice()
console.log(coppyArray);

// fills all the elements of an array from a start index to end index with a static value

console.log(nums.fill(0, 2, 4)); // start index 2 , until 4 position
console.log(nums.fill(5, 1)); // fill with 5 from position 1
console.log(nums.fill(6)); // fill with 6 all the array

// sort items by number or alphabet

nums = [2, 30, 1, 5, 6, 40]; // by first number
nums.sort();
console.log(nums);

// if result < 0, a is sorted before b
// if result > 0, a is sorted after b
// if resullt = 0, a and b are equal (no change)

nums.sort((a, b) => a - b); 
console.log(nums);

let names = ['Pesho', 'Alex', 'goshka', 'Gosho', 'Mary', 'asen'];
names.sort();
console.log(names); 
names.sort((a, b) => a.localeCompare(b));
console.log(names);

// concat numbers

const num1 = [1, 2, 4];
const num2 = [3, 5, 7];
const num3 = [8, 6, 9];
const numbers = num1.concat(num2, num3);
console.log(numbers);

// indexOf() return the firt index at which a given element can be found in the array

const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts.indexOf('bison'));
console.log(beasts.indexOf('bison', 2));
console.log(beasts.indexOf('giraffe'));

const items = ['item1', 'item2', 'item3'];
const copy = [];

// for loop
for (let i = 0; i < items.length; i++){
    copy.push(items[i]);
}
console.log(copy)

// forEach
const copy2 = [];
items.forEach(item => {copy2.push(item); });
console.log(copy2);

// Map: creates a new array with the results of clalling a provvided function

let x = [1, 4, 9];
let roots = x.map(function(num, i, arr){
    return Math.sqrt(num);
});
console.log(roots);
console.log(x);

// The some() method tests whether at least one element in the array passes the test

let array = [1, 2, 3, 4, 5, 6];
let isEven = function(element){
    return element % 2 === 0;
};

console.log(array.some(isEven));

// Find returns the first found value in the array

let array1 = [5, 12, 8, 130, 44];
let found = array1.find(function(element){
    return element > 10;
});
console.log(found);

// Filter: creates a new array with filtered elements only

let fruits = ['apple', 'banana', 'grapes', 'mango'];

function filterItems(arr, query){
    return arr.filter(function(el){
        return el.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
};

console.log(filterItems(fruits, 'ap'));


// Reduce: executes a reducer function on each element of the array, resulting in a single output value

const array2 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(array2.reduce(reducer));
console.log(array2.reduce(reducer, 5));
const red = (a, b) => a - b;
console.log(array.reduce(red));