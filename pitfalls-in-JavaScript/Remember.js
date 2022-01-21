// Important things to remeber as a JS developer
// =============================================

// If the variable is not declared or you have not assigned a value to it both outputs as undefined.
let num; // "undefined"

let num = null; // "object" -> bug in JS which we cant do anything

let func = function () { }
typeof func; // "function"

let nums = [1, 2, 3]
typeof nums; // "object"

/*
 All the above things must have questions in your mind that why it is like that
 but the answer to all that questions is JS has grown a lot now if we change it it will break
 a lot of things. So, just keep the above ones in mind and take it as exceptional cases.
*/

// ====================================================================================================

/* NaN is an important topic as it doesn't say that the variable is "Not A Number"
 It is saying that you are trying to do something nasty.
*/

// Example below

const greeting = "Hello Puneet";

let something = greeting / 2;

console.log(something); // NaN

Number.isNaN(something) // true

Number.isNaN(2) // false

Number.isNaN(greeting) // false

// =============================================================================================

/*The way to convert from one type to another is called coercion */

// ============================================================================

/*
Closure:

Definition:- Closure is when a function remebers the variable outside of it, even if you pass that function elsewhere
 */

// ==========================================================================================

/*
"this":-

A function's this references to the execution context for that call, determined entirely how the function was called

So, this creates a dynamic context when function is called in different ways

*/