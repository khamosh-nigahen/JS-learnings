/*
Very Important:-
****************

-> facade fucntion like setTimeout and functions which browser API provides run outide the javascript engine
they run in web browser. JavaScript only job is to spin functions like setTimeout in the browser
and JavaScript goes to the next line as it happens in the syncronous code.


When will the browser facade functions will be called?
Only after call stack is empty and all the syncronous code is run.
All the syncronous code is completed and call stack is empty
(stressing on this point as the function passed in the setTimeout will only enter the JavaScript engine when these 2 conditions gets satisfied)
Then we will check the callback Queue that anything is in it and yes in this case setTimeout function is there
then it will run the function passed in the setTimeout.
The above process is done by Event Loop.
Callback queue is a part of JavaScript engine


 */

/**
 * Returned Prmoise object has 2 things value and
 * hidden property onFulfilment which is an array of functions which will be trigerred
 * when value property gets updated
 *
 * When the Prmoise object is returned there is a hidden proprty on that object which is called
 * onFulfilment which is automatically trigged when we get the response of the call
 *
 * when we do .then on a promise object. Here, .then method adds the function which is passed inside .then
 * to the onFullfilment array
 */

/**
 * fetch is a facade name what is actually is xhr in the web browser
 * Web browser triggers xhr(XMLHttpRequest) when we call fetch
 */

/**
 * Not all APIs or functions whcib is available in Web browser returns Promise
 */

/**
 * Event Loop Priority
 * 1) Call Stack
 * 2) Micro-task Queue (also called Job Queue) -> things that returns Promise goes to microtask queue
 * 3) CallBack Queue (also called task queue)
 *
 * Very Important :- for APIs and functions/methods you need to go to JavaScript Specs and check which Queue
 * it goes to i mean does that particalr API/method/function goes to micro-task queue or the callback queue
 */

/**
 * So if you keep on adding fuctions in the microtask queue event loop will never reach the callback queue
 * in this way you can starve the callback queue
 * */

/**
 * in the promise object there is alos a staus property which has 3 values -> pending, resolved, rejected
 * pending -> returned in intial state
 * resolved -> when the work is successfully done
 * rejected -> when error comes in the work
 *
 * on resolved onFulfilment array gets populated by the function
 *
 * on reject onRejected array gets populated by the function which has to be used when it gets rejected
 *
 * Ex:-
 *
 * PromiseObject.then(() => {
 *  // functionality when resolved
 * }).catch(() =>{
 *  // functionality when rejected
 * })
 *
 * Another Ex:-
 *
 * PrmoiseObject.then(()=> {// on resolve}, () => {// on reject})
 *
 */

/**
 * So when the closure is present. You can check in the browser the values attached to it.
 * check the hidden property [[scope]] ==> here u can actaully see the backpack and what all things are lexically attached
 */