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
nums.splice(1, 0, 2) // add 2 to index 1
console.log(nums)
nums.splice(1, 1, 19) // replace 1 element at index 1 
console.log(nums);
nums.splice(1, 1) // remove 1 element at index 1
console.log(nums); 