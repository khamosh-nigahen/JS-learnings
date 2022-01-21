// There is awlays a global execution context where global variables and functions are defined

/*Every function has its own execution context */

/* Call Stack always has global context and functions gets stack on the global stack its behaves LIFO */

/*for loop doesn't create a new execution context but ya if u define let i in for loop
i is only acessible in for loop's block scope */


/* Example of Higher order functions and callbacks */
function copyArrayAndManipulate(arr, fn) {
    const output = []
    for (let i = 0; i < arr.length; i++) {
        output.push(fn(arr[i]))
    }
    return output
}

function mutilpyBy2(num) {
    return num * 2
}

console.log(copyArrayAndManipulate([1, 2, 3], mutilpyBy2))

/* Above copyArrayAndManipulate is a Higher order fucntion and mutilpyBy2 is an callback */

/* So here is the hierrarchy of checking the variables and fucntions defined

1) Execution context Local Memory
2) closure scope i.e if backpack carried by a particular function
3) parent scope
4) finally global scope

*/

/* Scope is defined as at nay line of code what data is available */

/*

Closure gives us persistent memories and entirely new toolkit

Application of closure:

1) Helper functions -> Everyday helper function which do it once and them 'memoize' it
(memorises it in key value pairs)

2)Iterators an generators -> which uses lexical scoping and closures to acheive
the most contemporary patterns of handling data in JS

Ex: - Like in python the yeild keyword - generator knows where the it is and what data it is currently holding

3) Module pattern -> Presure the state of an application withoutpolluting the global namespace.
module pattern just uses closure and the backpack

4) Asyncronous programming
*/

/*

Javascript is not enough -  we need new pieces(some of which aren't JavaScript at all)

Our core JavaScript engine has 3 main parts:

1) Thread of Execution
2) Memory/variable environment (Memory Heap)
3) Call Stack

We need to add some new components:

1) Web browser APIs/ Node background APIs
2) Promises
3) Event loop, Callback/Task queue and micro task queue

*/

/*
All the JS code code which is thrown out of the javascript to web broswser apis goes into the callback queue

Any function that is attched to a prmoise object/returns a promise object via then method and automatically called in javascript
once the response is updated in promise goes into microtask queue

u can check the mdn docs for bowser apis which function returns promise object and which throws to browser to do work

and when the code is been run in the call stack the event loops checks the microtask queue and
deques functions an then it goes to the callback queue and deques functions

So if there are infinite function to be run in microtask queue then the claaback queue never gets a chance to run

*/

/*

Object.create return an empty object with a hidden __proto__ property
so if u pass any function in Object.create(funcs) then it will be added to __proto__

 */

/* __proto__ basically has what all u have define for that object like variables, functions etc */


/* prototype is basically the inbuit function for the datatypes like objects, arrays, functions */

/* The __proto__ property is linked to Object.prototype which has fucntions like hasOwnProperty */

/*functions are both function and objects in javaScript */

/*
the  new keyword does below few things
1) it creates a new epmpty object
2) returns the object

if u want to initialize variables to the object it uses this to initialize and return this example below
this.name = name
return this

and if u want to attach a fucntion to all the objects create then use the prototype proprty to attach it
user.prototype.gender = () => {}

 */

/* All functions in JS are objects and function combo
in the object bit we have proptotype property which is by default empty object
 */

