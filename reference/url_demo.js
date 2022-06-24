const url = require('url');
// const URL = require('url').URL;
/* NOTE: if you are using v6 (LTS), line 1 gives errors,
*  if you get an error saying, TypeError: URL is not a constructor, 
*  comment line 1, and uncomment line 2 */

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

// let's instantiate an indexUrl object
const indexUrl = new URL("https://example:123@gmail.com#foo")

// Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());

// Host (root domain)
console.log(myUrl.host);

// Hostname (does not get port)
console.log(myUrl.hostname);

// Pathname
console.log(myUrl.pathname);

// Serialized query
console.log(myUrl.search);

// Params object
console.log(myUrl.searchParams);

// Add param
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);

// Loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));

// get the password of the url
console.log(indexUrl.password)

// to set the password portion of the url
indexUrl.password = "abc"
console.log(indexUrl.href)

// get the fragment portion of the url
console.log(indexUrl.hash)

// set the fragment portion of the url
indexUrl.hash = "bar"
console.log(indexUrl.href)

// to get the serialised url origin
console.log(indexUrl.origin)

// to set the pathname of the url
indexUrl.pathname = "fr"
console.log(indexUrl.href)

// get the url protocol
console.log(indexUrl.protocol)

// to set url protocol
indexUrl.protocol = "ftp"
console.log(indexUrl.href)

// to get the username portion
console.log(indexUrl.username)

// to set the username portion
indexUrl.username = "sample"
console.log(indexUrl.href)
