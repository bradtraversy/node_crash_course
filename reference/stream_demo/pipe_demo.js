// Write to file using pipes

const fs = require("fs");
const path = require("path");

// Create a readable stream
let readStream = fs.createReadStream(path.join(__dirname, "./read_file.txt"));

// Create a writable stream
let writeStream = fs.createWriteStream(path.join(__dirname, "./write_file.txt"));

// Read from read_file.txt and write to write_file.txt
readStream.pipe(writeStream)

//Pipes can also be used for responding to GET requests.