const EventEmitter = require("events");

const emitter = new EventEmitter()

// declare the event handler
function log(args) {
    console.log(`Saved event called with args: ${JSON.stringify(args)}`);
}

// attach the event listener to the saved event
emitter.on('saved', log)

// emit the saved event
emitter.emit('saved', {
    userId: 100,
    userName: "Puneet"
})

// remove the event listener
emitter.off('saved',log);

// no effect
emitter.emit('saved', {
    id: 200,
    name: 'Jain'
});


// ###############################################################

// const EventEmitter = require('events');

class Stock extends EventEmitter {
    constructor(symbol, price) {
        super();
        this._symbol = symbol;
        this._price = price;
    }
    set price(newPrice) {
        if (newPrice !== this._price) {
            this.emit('PriceChanged', {
                symbol: this._symbol,
                oldPrice: this._price,
                newPrice: newPrice,
                adjustment: ((newPrice - this._price) * 100 / this._price).toFixed(2)
            });
        }
    }
    get price() {
        return this._price;
    }
    get symbol() {
        return this._symbol;
    }
}

const stock = new Stock('AAPL', 700);

stock.on('PriceChanged', (arg) => {
    console.log(`The price of the stock ${arg.symbol} has changed ${arg.adjustment}%`);
})

stock.price = 720;
