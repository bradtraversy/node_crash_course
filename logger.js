const EventEmitter = require('events');
const uuid = require('uuid');

class Logger extends EventEmitter {
  // Everything in the constructor ...  
  constructor(){
        super();
        this.on('message', (data) => console.log('Called Listener', data));
    }
    log(msg) {
        this.emit('message', {id: uuid.v4(), msg: msg});
    }
}

// module.exports = Logger;

const logger = new Logger();

// Useless now
// logger.on('message', data => console.log('Called Listener', data));

logger.log('Hello World');
logger.log('Hi');
logger.log('Hello');
