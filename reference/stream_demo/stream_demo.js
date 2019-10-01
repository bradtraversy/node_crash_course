const fs = require("fs");
const path = require("path");

// Create a readable stream
let readStream = fs.createReadStream(path.join(__dirname, "./read_file.txt"));

// Create a writable stream
let writeStream = fs.createWriteStream(path.join(__dirname, "./write_file.txt"));

//Reading files using streamsreceiver
readStream.on('data', chunk => {
    console.log("New chunk of data received");
    
    //console.log(`${chunk} <== new chunk of data\n\n`);
    //The above line floods the console. Uncomment at your own risk.

    //Write the data chunk into write_file.txt
    writeStream.write(chunk)
})

/*

Streams can be used to read files that can't fit to memory.
Also the data receiver can start using information without having to wait for the entire thing.

*/

