### ES6 Snippets for quick Reference.

- let keyword declaration are block scope. Block is any section of code within curly{} braces.
- var declaration gives us function Scope.
- const keyword -> block in which they are defined, const keyword cannot be reassigned.

- Objects in JS are collection of key and pairs.
    Eg : const person = {
            name: "Vaibhav Patel",
            profession: "Student",
            walk(){
                console.log(this.name + " is walking...") // method inside an Object
            },
            talk() {}
        };

        person.talk(); //access method
        person.name = 'Vaibhav Bhatt' //Hardcoded.

        const targetMember = 'name';
        person[targetMember.value] = 'Vaibhav Bhatt'; // Dynamic access

        console.log(person.name)


#### This Keyword

A function will create its own context with 'this' keyword. A this keyword will have context of function in which it is present. But not for a function which may be present outside it's function's function. 
    Eg : 
        var employee = {
            id : 1,
            greet() {
                console.log(this.id);
            }
        };

        + It will print the required id, but 

        var employee = {
            id : 1,
            greet() {
                setTimeout(function(){console.log(this.id);}, 1000)
            }
        };   

        + It will print 'undefined' as this keyword does not have any context to id.

#### Arrow Functions     

+ Normal Function : 

        var func = function(parameter1, parameter2){
            // body 
        }

        function closeForm(p1, p2) {
            // body
        }

+ Arrow Functions

        const func = (p1, p2) => {
            //body
        }

        closeForm = (p1, p2) => {
            // body
        }


#### Default Function parameters

+ In ES6, we can set default function parameters while declaring the function so that whenever we do not pass parameters while calling a function, it takes the deafult function parameters. This

        Eg ->   
            let total = () => 5;
            let getValue = (value = "Vaibhav", bonus = 5, percent = bonus * total()) => {
                console.log("Value : " + value + ", Bonus : " + bonus + ", Percent : " + percent);
            };

            getValue(undefined, 15); // It will print Value : Vaibhav, Bonus : 15, Percent : 75
            getValue("Patel", undefined, 20); // It will print Value : Patel, Bonus : 5, Percent : 20


    + undefined is used if we want to specify a parameter and skip in between.


#### Rest and Spread Operator

    let displayColors = function(message, ...colors) { 
        console.log(message);

        for(let i in colors){  
            
            console.log(colors[i]);
        }
    };

+  "...variable" stands for Rest Operator, through this we can access selective arguments.
+ with help of rest operator you can add any number of parameters without affecting other parameters.
+ colors is an array

        let message = " List of Colors ";
        displayColors(message, 'Red');
        displayColors(message, 'Red', 'Blue');
        displayColors(message, 'Red', 'Blue', 'Green'); 

--- 

Spread Operator -> opposite of rest

    let displayColors =(message, ...listOfColors) => {

        console.log(message);

        for(let i in listOfColors){
            console.log(listOfColors[i]);
        }

    };

    message = "List of Colors";
    let colors = ['Red', 'Blue', 'Green'];

    displayColors(message, ...colors);

+ Spread Operator is specified during Function call.




