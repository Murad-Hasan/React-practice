// Mutable vs. Immutable in JavaScript

// A mutable object is an object whose state can be modified after it is created. Immutables are the objects whose state cannot be changed once the object is created. 
// --->Strings and Numbers are Immutable
// --> Array and Object are Mutable

//example of mutable array
const arr = [1,2,3,4];
console.log("arr", arr) // [1,2,3,4]

const arr2 = arr;
console.log("arr2", arr2)  // [1,2,3,4]


arr2.push(5);

arr2
console.log("arr2", arr2) // [1,2,3,4,5]
arr
console.log("arr", arr)  // [1,2,3,4,5]

//example of mutable object
const obj = {
    name: "John",
    age: 30
}
console.log("obj", obj) // {name: "John", age: 30}

const obj2 = obj;

obj2.name = "Jane";
obj2.age = 31;

console.log("'obj2' after add property",obj2) // {name: "Jane", age: 31});
console.log("'obj' after add property in obj2", obj) // {name: "Jane", age: 31});

//example of immutable number
const num = 10;
console.log("num", num) // 10
let b = num;
console.log("b", b) // 10
b = 20;
console.log("b", b) // 20
console.log('num',num) // 10;    
