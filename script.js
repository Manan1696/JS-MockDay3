// Q1. What is callback hell	

// Callback Hell is essentially nested callbacks stacked below one another forming a pyramid structure. 
// Every callback depends/waits for the previous callback, thereby making a pyramid structure that affects the readability and maintainability of the code.
// Every callback is depend on its parent after executing parent then an only then the childs is to be executed.

function numbers (){
    setTimeout(() => {
        console.log('1');
        setTimeout(() => {
            console.log('2');
            setTimeout(() => {
                console.log('3');
                setTimeout(() => {
                    console.log('4');
                    setTimeout(()=> {
                        console.log('5');
                    }, 1000)
                }, 2000)
            }, 3000)
        }, 4000)

    }, 5000)
}
 
numbers();


// Q2. What are promises and why do we need them?	

// Promises are used to handle asynchronous operations in JavaScript.
// It is basically used to avoid the callback hell and makes the code cleaner.
// They are easy to manage when dealing with multiple asynchronous operations where callbacks can create callback hell leading to unmanageable code.


//Q3. What is hoisting?

//In javascript,hoisiting means,a variable or function can be used before declaration.
//Only var supports hoisting.
//let and const doesn't supports hoisting.
//Note:Declaration part is hoisted only not initialization.

// a = 10 ;
// console.log(a);//10
// var a;

// var a;
// console.log(a);//undefined.
// a = 10;

//Q4. What is the DOM?

//DOM stands for Document Object Model.
//It is a programming interface that allows us to create, change, or remove elements from the document. 
//We can also add events to these elements to make our page more dynamic.
//The DOM views an HTML document as a tree of nodes. A node represents an HTML element.


//Q5. What is promise chaining

const alphabet = (time, value) => {
    return new Promise ((resolve, reject) =>{
        setTimeout( () => {
            console.log(value);
            resolve();
        })
    })
}

alphabet(6000, 'A')

// .then (() => alphabet(5000, 'E'))
// .then (() => alphabet(3000, 'I'))
// .then (() => alphabet(2000, 'O'))
// .then (() => alphabet(1000, 'U'))


//Q6. What is the purpose of async/await keywords?

// Async/Await makes it easier to write promises. The keyword ‘async’ before a function makes the function return a promise, always. 
// And the keyword await is used inside async functions, which makes the program wait until the Promise resolves.


//Q7. Give an example of async/await	

async function newFunction (){
    await alphabet(6000, 'A')
    await alphabet(5000, 'E')
    await alphabet(3000, 'I')
    await alphabet(4000, 'O')
    await alphabet(2000, 'U')
}

newFunction();


//Q8. Difference between undefined vs not defined vs NaN

// NaN: Not a number: As the name implies, it is used to denote that the value of an object is not a number.
// There are many ways that you can generate this error, one being invalid math opertaions such as 0/0 or sqrt(-1)

// undefined: It means that the object doesn't have any value, therefore undefined. This occurs when you create a variable and don't assign a value to it.

// null: It means that the object is empty and isn't pointing to any memory address.


//Q9. How many operators do we have in JS ?	

// There are six types of operators
// 1) Arithmetic Operators
// 2) Comparison Operators
// 3) Logical Operators
// 4) Assignment Operators
// 5) Ternary Operators
// 6) typeof Operator


//Q10. What are pure functions?	

// A Pure Function is a function (a block of code) that always returns the same result if the same arguments are passed. 
// It does not depend on any state or data change during a program’s execution. Rather, it only depends on its input arguments.

// Also a pure function does not produce any observable side effects such as network requests or data mutation etc.

let val1 = 6;
   let val2 = 4;
   function pure() {
      console.log(val1 * val2); 
   }
pure();

// Q11. What are arrow functions?

// An arrow function expression is a compact alternative to a traditional function expression, but is limited and can't be used in all situations.

// There are differences between arrow functions and traditional functions, as well as some limitations:

// Arrow functions don't have their own bindings to this, arguments or super, and should not be used as methods.
// Arrow functions don't have access to the new.target keyword.
// Arrow functions aren't suitable for call, apply and bind methods, which generally rely on establishing a scope.
// Arrow functions cannot be used as constructors.
// Arrow functions cannot use yield, within its body.


hello = () => {
    return "Hello World!";
  }