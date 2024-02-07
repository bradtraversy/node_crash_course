const fs = require("fs")
const path = require("path")

// Create a directory
// fs.mkdir(path.join(__dirname, "/test"), {}, function (err) {
//   if (err) throw err
//   console.log("Folder has been created")
// })

// Using Promise instead of callback
// const createFolder = async () => {
//   try {
//     await fs.promises.mkdir(path.join(__dirname, "/test"))
//     console.log("Folder has been created")
//   } catch (err) {
//     console.error(err)
//   }
// }
// createFolder()

// Create and write to file
// fs.writeFile(
//   path.join(__dirname, "/test", "hello.txt"),
//   "Hello World!",
//   (err) => {
//     if (err) throw err
//     console.log("File has been created")
//     //   Append to file
//     fs.appendFile(
//       path.join(__dirname, "test", "hello.txt"),
//       " I love Node.js!",
//       (err) => {
//         if (err) throw err
//         console.log("File has been appended")
//       }
//     )
//   }
// )

// Read file
// fs.readFile(path.join(__dirname, "test", "hello.txt"), "utf8", (err, data) => {
//   if (err) throw err
//   console.log(data)
// })

// Rename file
// fs.rename(
//   path.join(__dirname, "test", "hello.txt"),
//   path.join(__dirname, "test", "helloworld.txt"),
//   (err) => {
//     if (err) throw err
//     console.log("File has been renamed")
//   }
// )

// Delete file
// fs.unlink(path.join(__dirname, "test", "helloworld.txt"), (err) => {
//   if (err) throw err
//   console.log("File has been deleted")
// })

// Remove a directory
// fs.rmdir(path.join(__dirname, "test"), err => {
//   if (err) throw err
//   console.log("Folder has been removed")
// })
