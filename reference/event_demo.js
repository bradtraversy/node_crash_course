// EventEmitter:
// In Node.js, EventEmitter is a class that facilitates communication/interaction between objects in Node.
// EventEmitter is at the core of Node asynchronous event-driven architecture.
// Many of Node's built-in modules inherit from EventEmitter.

const EventEmitter = require("events")

// Create class
const MyEmitter = class extends EventEmitter {}

// Init object
const myEmitter = new MyEmitter()

// Event listener
myEmitter.on("event", () => {
  console.log("Event fired!")
})

myEmitter.emit("event")
