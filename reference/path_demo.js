// Docs: https://nodejs.org/docs/latest/api/path.html#pathbasenamepath-suffix

const path = require("node:path")

// Base file name
console.log(path.basename(__filename))

// Directory name
console.log(path.dirname(__filename))

// File extension
console.log(path.extname(__filename))

// Create path object
console.log(path.parse(__filename))

// Path format to string (opposite of path.parse)
console.log(path.format(path.parse(__filename)))

// Concatenate paths
console.log(path.join(__dirname, "test", "hello.html"))

