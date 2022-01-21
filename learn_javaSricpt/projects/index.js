console.log("Hello Puneet!")

//If you have a number but need to print it on the screen, you need to convert the value to a string, and in JavaScript this conversion is called "coercion." 
var a = "42";
var b = Number(a);

console.log(a);	// "42"
console.log(b);	// 42

// ========================================

function printAmount(amt) {
    console.log(amt.toFixed(2));
}

function formatAmount() {
    return "$" + amount.toFixed(2);
}

var amount = 99.99;

printAmount(amount * 2);		// "199.98"

amount = formatAmount();
console.log(amount);

// scopes

function outer() {
    var a = 1;

    function inner() {
        var b = 2;

        // we can access both `a` and `b` here
        console.log(a + b);	// 3
    }

    inner();

    // we can only access `a` here
    console.log(a);			// 1
}

outer();

// typeof

var a;
typeof a;				// "undefined"

a = "hello world";
typeof a;				// "string"

a = 42;
typeof a;				// "number"

a = true;
typeof a;				// "boolean"

a = null;
typeof a;				// "object" -- weird, bug
console.log(typeof a);

a = undefined;
typeof a;				// "undefined"

a = { b: "c" };
typeof a;

// Only values have types in JavaScript; variables are just simple containers for those values.


// Objects

var obj = {
    a: "hello world",
    b: 42,
    c: true
};

obj.a;		// "hello world"
obj.b;		// 42
obj.c;		// true

obj["a"];	// "hello world"
obj["b"];	// 42
obj["c"];	// true

/* Properties can either be accessed with dot notation (i.e., obj.a) or bracket notation (i.e., obj["a"]). Dot notation is shorter and generally easier to read, and is thus preferred when possible.

Bracket notation is useful if you have a property name that has special characters in it, like obj["hello world!"] -- such properties are often referred to as keys when accessed via bracket notation. The [ ] notation requires either a variable (explained next) or a string literal (which needs to be wrapped in " .. " or ' .. '). */

// built-in methods

var a = "hello world";
var b = 3.14159;

a.length;				// 11
console.log(a.toUpperCase());		// "HELLO WORLD"
b.toFixed(4);			// "3.1416"


/*

The specific list of "falsy" values in JavaScript is as follows:

"" (empty string)
0, -0, NaN (invalid number)
null, undefined
false

Any value that's not on this "falsy" list is "truthy." Here are some examples of those:

"hello"
42
true
[ ], [ 1, "2", 3 ] (arrays)
{ }, { a: 42 } (objects)
function foo() { .. } (functions)

*/

// The proper way to characterize them is that == checks for value equality with coercion allowed, and === checks for value equality without allowing coercion; === is often called "strict equality" for this reason.

