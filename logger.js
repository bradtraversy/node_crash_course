const EventEmitter = require("events");
const uuid = require("uuid");

class Logger extends EventEmitter {
  log(msg) {
    // Call event (This is the event)
    this.emit("message", { id: uuid.v4(), msg });
  }
}

// module.exports = Logger;

const logger = new Logger();

// Event listener
logger.on("message", (data) => console.log("Called Listener", data));

logger.log("Hello World");
logger.log("Hi");
logger.log("Hello");
