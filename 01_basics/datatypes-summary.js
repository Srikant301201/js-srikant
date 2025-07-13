// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false 
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 54126878457554544n


// Reference (Non Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naggraj", "doga"];

let myObj = {
    name: "Srikanta",
    age: 24,
}

const myFunction = function(){
    console.log("Hello world");
    
}

console.log(typeof bigNumber);

// link to study 
// https://262.ecma-international.org/5.1/#sec-11.4.3



//--------------------------------------------------------------------------------------------------------------------

// Stack memory (Primitive ) = main use hota hai.

let myName = "srikantsethidotcom"

let anothername = myName
anothername = "sethisrikant2001dotcom"

console.log(myName);
console.log(anothername);

//Heap memory  (Non Primitive /Reference) = main use hoti hai.

let userOne = {
    email : "user@google.com",
    upi : "user@ybl"    
}

let userTwo = userOne

userTwo.email ="srikant@google.com"
userTwo.upi ="user@ibl"

console.log(userOne.email);
console.log(userOne.upi);

console.log(userTwo.email);
console.log(userTwo.upi);






