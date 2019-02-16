const path = require('path');

// Base file name
console.log(path.basename(__filename));

// Directory name
console.log(path.dirname(__filename));

// File extension
console.log(path.extname(__filename));

// Create path object
console.log(path.parse(__filename).base);

// Concatenate paths
console.log(path.join(__dirname, 'test', 'hello.html'));



// More examples


// get the path delimiter base on the current OS Environment
const platSpec = path.delimiter;

console.log(platSpec);


// ge the path format on POSIX : / and Windows : \
// more info : https://nodejs.org/dist/latest-v11.x/docs/api/path.html#path_path_format_pathobject
const pathformat = path.format({
  dir: pathjoin,
  root: pathjoin,
  base: pathjoin,
  name: pathjoin,
  ext: pathjoin,
});

console.log(pathformat);


// get the parent folder director
const parentDir = path.dirname(__dirname);

console.log(parentDir);
