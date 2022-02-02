// JavaScript

// The map() method creates a new array with the results of calling a function for every array element.
// Eg - const numbers = [4, 9, 16, 25];
//      const newArr = numbers.map(Math.sqrt)

// The filter(function) method creates an array filled with all array elements that pass a test (provided by a function).
// 
// Eg - const ages = [32, 33, 16, 40];
//      ages.filter(checkAdult)    // Returns [32, 33, 40]
//      function checkAdult(age) {
//        return age >= 18;
//      }


//ES6

// var -> in function
//let keyword -> block in which they are defined
// const -> block in which they are defined, const keyword cannot be reassigned.


// objects - Objects in JS are collection of key and pairs.

// const person = {
//     name: 'Vaibhav Patel',
//     walk: function(){},  // if a function is inside an object, we refer to it as method.
//     talk() {} // method/function declaration inside an object'.
// };

// person.talk(); //access method
// person.name = 'Vaibhav Bhatt' //Hardcoded.

// const targetMember = 'name';
// person[targetMember.value] = 'Vaibhav Bhatt'; // Dynamic access

// console.log(person.name)

// This keyword

// const person = {
//     name: "Patel",
//     walk(){
//         console.log(this.name + " is walking...")
//     }
// };
// person.walk();


// Arrow Functions

// const a = function(){
//     return 10;
// }

// const b = () => 10;

// const c = () => { //parameters in parathesis.
//     //code here
// }

// Default Function Parameters - It puts default value if parameter is not provided.
// let total = () => 5;
// let getValue = (value = "Vaibhav", bonus = 5, percent = bonus * total()) => {
//     console.log("Value : " + value + ", Bonus : " + bonus + ", Percent : " + percent);
// };

// getValue(undefined, 15);
// getValue("Patel", undefined, 20);


//Rest Operator
// It is specified in function declaration.
let displayColors = function(message, ...colors) { // "...variable" stands for Rest Operator, through this we can access selective arguments.

    //with help of rest operator you can add any number of parameters without affecting other parameters.
    //colors is an array
    console.log(message);

    for(let i in colors){  
        
        console.log(colors[i]);
    }
};

// let message = " List of Colors ";
// displayColors(message, 'Red');
// displayColors(message, 'Red', 'Blue');
// displayColors(message, 'Red', 'Blue', 'Green');


//Spread Operator -> opposite of rest

// let colors = ['Red', 'Blue', 'Green'];

// let displayColors = function(message, ...listOfColors){

//     console.log(message);

//     for(let i in listOfColors){
//         console.log(listOfColors[i]);
//     }

// };

// message = "List of Colors"

// displayColors(message, ...colors); //Spread Operator is specified during Function call.


//Object Literals

// let firstName = "Vaibhav";
// let lastName = "Patel";

// function eligible(firstName, lastName, age){

//     let fullName = firstName + " " + lastName;

//     return{
//         firstName,
//         fullName,
//         lastName,
//         isSenior(age){  //method
//             return age>18;
//         }
//     }

// }


// let p1 = eligible(firstName, lastName, 68);
// console.log(p1); //



// let ln = "lName";
// let p2 = {
//     fName: "A",
//     [ln]: "B"
// }

// console.log(p2);




//Destructuring Arrays
// let employee = ["Vaibhav", "D", "Patel"];

// // let [fName, , lName] = employee;
// let [fName, ...elements] = employee; //using Rest Operator.

// let [f, m, l = "Male"] = employee;

// console.log(elements);
// console.log(l);



//Destructuring Objects
// let employee = {
//     fname:"Vaibhav", 
//     mName:"D",
//     lName:"Patel"
// };

// let {fname: f, mName: m, lName: l} = employee;  // alias -> :f

// console.log(f, m, l);




// String Templates
// let user = "Vaibhav";

// let greet = "Hello " + user; //old JavaScript
// let g = `Hello ${user}  Gm  'single' "double"
//         Second Line
//         Third       `; //Es6
// console.log(g);


// For LOOP

// let colors = ['red', 'blue', 'green'];

// for(let i in colors){
//     console.log(colors[i]); 
// }

// for(let i of colors){
//     console.log(i);
// }

// let name = "Vaibhav";

// for(let j of name){
//     console.log(j);
// }