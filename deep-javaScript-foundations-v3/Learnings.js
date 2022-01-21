/* JavaScript is not just a interpreted language but also its compiled to some level
languages like Java is said to be compiled as they ship a bytecode for execution
but what JavaScript does is parsing thats where you get few syntax error message before execution

JS parses teh source code not very dissimilar to bytecode and hadded off to theJavScript virtual machine
which is embedded inside the same JavaScript Engine

So, we have to think JS laguage as a 2-pass system rather than a single pass
*/

/**
Lexical scope means that in a nested group of functions,
the inner functions have access to the variables and other resources of their parent scope.
This means that the child's functions are lexically bound to the execution context of their parents


The lexical scope allows a function scope to access statically the variables from the outer scopes.
Finally, a closure is a function that captures variables from its lexical scope.
In simple words, the closure remembers the variables from the place where it is defined,
no matter where it is executed.
 */