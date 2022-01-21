// nodeJS = JavaScript and C++

/**
 * when u create an http object with http.createServer() it does 3 things:
 * 1) create a socket connection with C++ libUV
 * 2) return an http instance which is an obeject with methods like listen() etc
 * 3) the fucntion we passed in http.createServer() will be sitting on Node C++ features which
 *    will be waiting to be run when it receives and incoming message
 * 4) the above function will have 2 objects which will be automatically inserted by node when it gets invoked
 *    those objects usually we call it as req, res
 */

/**
 * libUV is responsible for interaction between Node C++ engine and the computer internal features
 */

/**
 * Many a times whn u pass the content in JSON.parse() function is a buffered format data
 * which is a representation os 0s and 1s.
 */

/**
 * Stream is not a contibues flow of data it is actually chunks of data
 */
/**
 * Default size of the batch size is 64kb which is called high watermark
 *
 * So if u created a readStream, then on gathering 64kb of data node will broadcast or shout out an event,
 * the event is "data" and then the code will capture the event "data" and cal the callback/automatic func
 *
 * Until we attach readStream.on("data", autoFunc) the stream doesn't starts puling data until it know what
 * do with data when it arrives. So, "on" method is necessary after creating an instamce of stream
 */

/**
 * In browser the JavaScript engine has the event loop but in node libUV has the event loop
 */

/**
 * Node total has 6 queues but we mostly use 2 or 3 (like the callback queue)
 */


/**
 * setTimeout in Node is built with C++ and libUV, and in browser its the nrowser API not in JS
 */

/**
 * setTimeout callback function goes into the "Timer Queue"
 */

/**
 * Any data that comes back from "fs" or "http" (network call) goes into "IO callback queue"
 */

/**
 * setImmediate() puts the fucntion into the "check queue", event loop goes to "cehck queue" after all the functions
 * are done in the "IO callback queue" at that particular moment.
 *
 * Mostly "check queue" is used when u want to do something after "IO callback queue" is done
 */

/**
 * Priority of Queues in Node after all the global code is done and call stack is empty
 * 0) Microstask Queue (Promise based)
 *      a) process.nextTick(callbackfunc) -> is the first one to run (check why dont we use now process.nextTick)
 *      b) Any functions delayed using promises -> is the next priority
 * 1) Timer Queue (technically also called a minHeap)
 * 2) IO Callback Queue
 * 3) Check Queue   
 * 4) close Queue (any asociated functions with close event goes to "close Queue")
 *
 * The event loop checks the Microtask Queue everytime it goes to another Queue
 * For example:
 *  microtask queue -> timer queue -> microtask queue -> IO callback Queue -> microtask queue -> check queue
 */


