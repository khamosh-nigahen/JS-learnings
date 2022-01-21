
// Below points are very important and few implementations are done in the src folder

/*

(Ex: 1)
Primitive value gets passed by value. Like: number, string, boolean, undefined

So if you are pointing something to primitive types it creates a if the old pointer is removed

Non - primitive value gets passed by reference. Like: Objects, functions, arrays

for non-primitive things they use the same memory as its a reference

*/

// mutation is when u can change or modify it and immutable means u cannot change it

// when to use bracket notation when the property is not a string literal (Ex: 2)

// dot nitaion internally coerces that variable into string.

// even if u passed a fucntion in brackets notation it gets coerced to a string

// Array is an special kind of object

/*
Checkout some pretty cool stuff on arrays at Ex: 3
*/

/*
Both for...in and for...of statements iterate over something. The main difference between them is in what they iterate over.

The for...in statement iterates over the enumerable properties of an object, in an arbitrary order.

The for...of statement iterates over values that the iterable object defines to be iterated over.
*/

/* Difference between .each/_.each with .map/_.map is that .each doesn't return anything
but .map and .filter does  return an array

.map return same size of the original array

.filter returns smaller/same size of the original array

*/


/*

Parameters are the variable which doesn't have value until a fucntion is called
Arguments are the actaul value

function add(a, b) -> Paramters

const num1 = 1
const num2 = 2

add(num1, num2) -> arguments
*/

/*
What is a side effect?

Side effect is something which is doing something outside of the fucntion scope or doing outside of the curly braces
like console.log is happening outside of the fucntion scope and as it is reaching the console and doing something
like object is getting modified but object is defned in global scope

manipulation of DOM is a side effect

 */


/*
this:-

arrow fucntions doesn't have its own this context it uses context of the parent scope
so, basically this of the parent scope

and arrow functions doesn't have arguments keyword,
there is no arguments[0], arguments[1] in arrow fucntions as normal fucntion have these

 */

/*
arguments keyword only care about the arguments passed it doesn't take account of defualt parameters or spread operator
 */


/*

check youtube and mdn for details

.call() -> its calls the function similar like any function  -> add() equals to add.call()
            special thing in .call is if want to call an fucntion of an object to another object we can use .call()
            we can say it as fucntion borrowing.
            example -> object1.somefunc.call(object2, arg1, arg2)

.apply() -> same as .call just difference is they way we pass arguments
            example -> object1.somefunc.apply(object2, [arg1, arg2])
            u can even do this if u are doing on the same object in some scenario -> object1.somefunc.apply(this, [arg1, arg2])

.bind() -> same a .call only differnce is it will not call the function but returns the function which can be called later
            example - let func = object1.somefunc.bind(object2, arg1, arg2);
            func()

All the above base techique is used for function borrowing
 */

/*

Array.from returns Array if u pass Array like objects, under the hood is does this -> Array.prototype.slice.call(arguments)
test the above on arguments keyword

Array like objects are ones which has .length property but not methods like push or slice
*/

/* var keyword has a global scope   */


/*_.reduce returns 1 thing, basically it reduces down to return only 1 thing */

/*

CURRING is function decomposition with no of arguments and once all the arguments are provided to teh function

it returns the result until then it saves the arguments results in some scope thing.

Ex: function curry(a,b,c) - this call be called ad curry(a)(b)(c) or curry(a,b)(c)

It will return the result only after all the arguments are processed

check _.curry in lodash or underscore

 */

/*
COMPOSING
Returns the composition of a list of functions, where each function consumes the return value of the function
that follows. In math terms, composing the functions f(), g(), and h() produces f(g(h())).

var greet    = function(name){ return "hi: " + name; };
var exclaim  = function(statement){ return statement.toUpperCase() + "!"; };
var welcome = _.compose(greet, exclaim);
welcome('moe');

*/

/*
Parameters are just local scope variables
*/

