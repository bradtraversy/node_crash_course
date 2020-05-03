// This is my way of extending the learning of the FS section of the course.  
// It implements simple things like additional checks to be sure a directory doesn't exist, arrow functions in JS, 
//   so that we can reuse, and passing in well named parameters for ease of use. 

const path = require("path"); // built in node path module.
const fs = require("fs"); //built in file system module.


//make directory.
const newDir = (directoryName) => {
    // confirm the folder doesn't exist before continuing.  
  if (path.join(__dirname, directoryName) === true) {
    console.log(`Error: ${directoryName} already exists.`);
  } 
    // if it doesn't exist, create it and confirm it. 
    else {
            fs.mkdir(path.join(__dirname, directoryName), {}, (err) => {
            if (err) throw err;
            console.log(directoryName, " created.");
            });
        }
};

// write a file.
const writeAFile = (folder, nameForFile, dataToWrite) => {
  fs.writeFile(
    path.join(__dirname, folder, nameForFile),dataToWrite, err => {
      if (err) throw err;
      console.log("File successfully created.");
    });
};


// append to a file.
const appendToFile = (folder, file, text) => {
  fs.appendFile(path.join(__dirname, folder, file), `\n${text}`, (err) => {
    if (err) throw err;
    console.log(`Appended ${text} to ${file} in ${folder}`);
  });
};


// read a file.
const readAFile = (folder,file, encoding) => {
    fs.readFile(path.join(__dirname, folder, file), encoding, (err, data) => {
        if(err) throw err; 
            console.log(data); 
    }); 
}

// Rename A file 
const renameFile = (folder, oldName, newName) => {
    fs.rename(path.join(__dirname, folder, oldName), path.join(__dirname, folder, newName), err => {
        if(err) throw err; 
            console.log(`Succes:  ${oldName} renamed to ${newName}.`); 
    }); 
};
