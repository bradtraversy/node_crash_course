const url = require("url")

const myUrl = new URL(
  "http://mywebsite.com:800/hello.html?id=100&status=active"
)

// Print the URL object
console.log(myUrl)

// Serialize the URL object into a string
console.log(myUrl.toString())

// Host (root domain)
console.log(myUrl.host)

// Hostname (does not get port)
console.log(myUrl.hostname)

// Pathname
console.log(myUrl.pathname)

// Serialized query
console.log(myUrl.search)

// Params object
console.log(myUrl.searchParams)

// Add param
myUrl.searchParams.append("source", "google")
console.log(myUrl.searchParams)

// Loop through params
myUrl.searchParams.forEach((value, name) => {
  console.log(`${name}: ${value}`)
})
