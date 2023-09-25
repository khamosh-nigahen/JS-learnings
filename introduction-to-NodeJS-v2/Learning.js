// JavaScript is single threaded

// Node is a OS level language.. it doesn't have DOM or CSS or methods like alert etc

// A lot of build tools are made with NodeJS like babel etc..

// So remember when u were developing a react app and process was not defined.. it was because JavaScript doesn't 
// have process ... process is defined in node .. but when u deploy react app on node server ..
// the build tool uses process.env things and run ur app before its been run on the browser

// mostly you will be using async versions of methods/functions
// for example u take fs module and use readFile which async and u want mutiple user to hit ur server at the same time
// if u choose reafFileSync which will block ur code and only one user will be able to use it
// only when u r starting ur server then u might need syncronous code, rest of the place async works well

// NodeJS recently added that u can use await keyword in the global space without using async
// but if u are in the function u have to declare a function as async to use await

// process.exit(1) => means crashed or something bad happened in code
// process.exit(0) => code running has completed successfully

// u have to use the packagename for import
// Ex: import {something} from "app-package"
// import something from "@company/app" => this is a scoped import, scoped to the company

// import _ from "lodash"
// if u dont put any relative path like ./code.js
// then first it check wheather its an internal module like process, fs
// then it goes to node_modules and check if that exists means u miht have installed it

/**
 * npx is used when u want to do things globally but do not want to install it
 * for example i want to use the below command
 * yarn add lodash
 * but i do not want to install yarn globally
 * so here we can do
 * npx yarn add lodash
 * here we have not installed lodash globally but used its functionality
 */

/**
 * bin is the folder where all your global commands gets installed
 * like -> #!/usr/bin/env node or #! /usr/bin/python
 */


/**
 * Route is a combination of path and verb
 * i mean path can be same but verb can differ
 */

/**
 * Middleware is something which sits between incoming request and eventually what you with that request
 * its a small little functionality which does something to your every request, ex: checking authentication
 * body-parser, morgan are tools used for middleware
 */


/**
 * Use Jest for unit testing as Node also uses it heavily and React also
 *
 * Snapshot testing is like it take code of HTML into a file before running test and after running test it again
 * takes code of HTML into a file and compares it. If its is same means DOM is same test passed else fails
 */

/**
 * Mock all the API class, DB calls, installed modules etc
 * You should only unit test the code which u have written
 * Thats the thumb rule.
 * beacuse hitting the API has a cost, fetching from DB has a cost
 */

/**
 * If u use a transpiler like babel or typescript then you do not need to use .mjs extension
 * those transpiler will do it for you. just use .js in that case
 */

