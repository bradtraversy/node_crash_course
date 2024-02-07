const http = require("http")

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader("Content-Type", "text/plain")
  res.write("Hello there")
  res.end()
})

server.listen(3000, "127.0.0.1", () => {
  console.log("Server is running on port 3000")
})
