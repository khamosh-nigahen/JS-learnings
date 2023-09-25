/**
 * A server which uses HTTP for communication is the web server
 */

/**
 * SMTP is used for email
 * IRC is used for chat (older times.. check which is used now)
 *
 */

/**
 * this.push is used sometimes instead of directly calling next() because sometimes u want to fill the
 * buffer than u want to push the data to out stream, next() will directly push data into outstream
 * irrespective of buffer size. Hence use this.push() when u want buffer to get filled and then push the
 * data to the out stream
 */

/**
 * If u provide null to this.push() then its a signal to next stream that its finished
 */

/**
 * 2 modes of readable streams -> paused mode and flowing mode
 * All readable streams are in paused mode by default.
 *
 */

/**
 * backpressure is something when readable streams are continously fetching data but
 * writeable streams is not able to consume that fast
 * Ex: a server which is capable to delivering data really fast but the mobile user has 2G conection
 */

/**
 * all the methods available in readable and writeable streams are available in Transform and duplex streams
 */


/**
 * Duplex streams are like telephone.. you use the same channel(object) for reading and writing
 * Duplex stream looks like -> a.pipe(stream).pipe(a)
 */

/**
 * we can use the 'net' module for a tcp connection
 * const net = require('net')
 * net.createServer(function (stream) {})
 */

/**
 * if u do not pipe readable stream to a writable stream then readable stream will just sit there,
 * there will be no 'end' event
 */


/**
 * 'net' returns the duplex stream with TCP connectiom
 * 'lts' return the duplex streams with SSL connection
 *
 * both have connect and createServer methods
 */
