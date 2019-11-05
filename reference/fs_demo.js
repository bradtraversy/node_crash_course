const fs = require('fs');
const path = require('path');

// Create folder
// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//   if (err) throw err;
//   console.log('Folder created...');
// });

// Create and write to file
// fs.writeFile(
//   path.join(__dirname, '/test', 'hello.txt'),
//   'Hello World!',
//   err => {
//     if (err) throw err;
//     console.log('File written to...');

//     // File append
//     fs.appendFile(
//       path.join(__dirname, '/test', 'hello.txt'),
//       ' I love Node.js',
//       err => {
//         if (err) throw err;
//         console.log('File written to...');
//       }
//     );
//   }
// );

// Read file
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// Rename file
fs.rename(
  path.join(__dirname, '/test', 'hello.txt'),
  path.join(__dirname, '/test', 'helloworld.txt'),
  err => {
    if (err) throw err;
    console.log('File renamed...');
  }
);






// WRITE THE FOLLOWING USERS NAME IN  A FILE  AND THEN DISPLAY THEM
const users = [
  { name: "Kaddy" },
  { name: "Marc" },
  { name: "Prince" },
  { name: "Kally" }
]

// create folder
fs.mkdir(path.join(__dirname, "/data"), {}, err => {
  if (err) throw err;

  console.log("Folder created ...");

  // create file and write json data
  fs.writeFile(path.join(__dirname, "/data", "name.json"), JSON.stringify(users), err => {
    if (err) throw err;

    console.log("File created and data written ...")

    //read file
    fs.readFile(path.join(__dirname, "/data", "name.json"), "utf8", (err, users) => {
      if (err) throw err;

      // display user name
      JSON.parse(users).forEach(user => {
        console.log(user.name);
      });

      // display successful message
      console.log("Users name displayed ...")


      // rename the file
      fs.rename(path.join(__dirname, "/data", "name.json"), path.join(__dirname, "/data", "users.json"), err => {
        if (err) throw err;

        // display successful message
        console.log("File rename completed ...");
      });

    });
  });
})




// delete a folder
// NOTE : you must create a folder named "myFolderToDelete".
// NOTE : myFolderToDelete must be an empty folder.
fs.rmdir(path.join(__dirname, "/myFolderToDelete"), (err) => {
  if (err) throw err;

  console.log("Folder deleted ...");
});


// Read the contents of a folder
// NOTE: the first argument can be whatever route you want, it doesn't have to be the actual dirname.
fs.readdir(__dirname, (err, files) => {
  if (err) throw err
  console.log(files)
}) 

// Copy a file 
fs.copyFile('source.txt', 'destination.txt', err => {
  if (err) throw err;
  console.log('File copied...')
})