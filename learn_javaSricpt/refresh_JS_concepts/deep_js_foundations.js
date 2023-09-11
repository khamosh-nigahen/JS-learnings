// coercion

var y = "5"
console.log(y++);
console.log(y); // ++ works on integers so it will coerce the string to integer

// objects

var obj1 = {
    name: "Deep JS"
}

var obj2 = {
    name: "Deep JS"
}

console.log(obj1 == obj2);

// arrow functions are bond to its parent context.

// only use arrow functions when you need lexical this

const a = [];
console.log(typeof a); // why??

const b = new Array();
console.log(typeof b); // why? 
