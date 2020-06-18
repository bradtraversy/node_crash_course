var fs = require('fs')


//create a file name named as hello.txt

fs.writeFile('hello.txt', 'this is the data', function (err, data) { 
    if (err) {
        console.log("Error")
    }
    else { 
        console.log("File Created")
    }
})

//Deleting the file which we created:


fs.unlink('hello.txt', function (err) { 
    if (err) {
        console.log("Error")
    }
    else { 
        console.log("Deleted")
    }
})
