const fs = require('fs').promises;
const path = require('path');

// Create folder, this is using asynchronous Promise file system API
fs.mkdir(path.join(__dirname, 'test'))
    .then(() => console.log('Folder created...'))
    .catch(error => {
        if (error.code === 'EEXIST') {
            console.log('Folder already exists...');
        } else { throw error; }
    });

const filePath = path.join(__dirname, 'test', 'hello.txt');

// Create and write to file
fs.writeFile(filePath, 'Hello World!')
    .then(() => console.log('File written...'))
    .then(() =>

        // File append
        fs.appendFile(filePath, '\nI love NodeJS')
    ).then(() => {

        // Read file
        fs.readFile(filePath, 'utf-8')
            .then(data => console.log(`\n"${data}"\n`));
    }).then(() =>

        // Rename file
        fs.rename(
            filePath, 
            path.join(path.dirname(filePath), 
            'helloworld.txt')
        ).then(() => console.log('File renamed...'))
    );
