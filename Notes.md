<h1>
NODE NOTES (from Brad Traversy crash course)

</h1>
<ul>
   <h3>
  1. Typing Node in console we can run basic JS programs    </h3>
   </ul>
<ul>

<h3>2. Import and Export </h3>
   <li>
    const name = require('moduleName') for import,
   </li>
   </li>module.exports = variableName for exporting the variable</li>

   </ul>
<ul><h3>
3.  Module Wrapper Function
</h3>
     <li> `function(exports,require,module,__filename,__dirname){}`
      // learn more about module wrapper fn()</li>
   </ul>
<ul>
<h3>
4. Path, fs are core modules</ul>
</h3>
<ul>
<h3>
5. Path: we can concat using .join()
</h3>

   <li>we can create object using details in file via .parse(), </li><li>we can get file name using `.basename(__filename)` we can get dirname using `.dirname(__filename)`</li></ul>
<ul>
<h3> 
   6. FileSystem(fs): we have .mkdir(path,options, callbackFunction)
</h3>

<li>
   `.mkdir(path(__dirnam, {}, err=> err?err:console.log('folder created'))`</li><li>
   fs: we have .readFile(path,options, callbackFunction)
   `.readFile(path(__dirnam, "utf-8", (err,dat=> err?err:console.log(dat)`</li><li>
   fs: .writeFile(path,options, callback),.appendFile(path,options, callback)</li><li>
   fs: .rename(path,path_WithNew_Name, callback)</li></ul>
 <ul>
<h3>

 7.URL: in URL we have many methods ,few are below
</h3>
   
   <li>
       myURL.href</li><li>
      myUrl.toString()</li><li>
       myURL.host</li><li>
       myURL.hostename//without port</li><li>
      myURL.search//data in url</li><li>
      myURL.pathname//about.html</li><li>
      myURL.searchParams//get data in url as object</li><li>
      myURL.searchParams.append(key,value)//attached data in url and get as an object</li><li>
       myURL.searchParams.forEach((key,value)=>{loop those value})//loop new data and get data in url as object</li>
      </ul>

 <ul>
      <h3>8. Events: we imports events as EventEmiiter
   </h3>

<li>
    then we create a new class that extends this emiiter</li><li>
    nameofClass.on('trigger', callback function)</li><li>
    to fire this function we use nameofClass.emit()</li></ul>
 <ul>
<h3>
9. OS is also a core component, os methods are below 

</h3>
<li>
    .platform()</li><li>
   .arch()</li><li>
   cpus()</li><li>
   freemem()</li><li>
   totalmem()</li><li>
   homedir()</li><li>
   uptime()</li></ul>
 <ul>
    <h3>10. HTTP :</h3>
    <li> HTTP.createServer((resolve,request)=>{//writing response})</li>
    <li> createServer().listen(portName,callback)</li>
    <li> inside create server we can read file  using fs.readFile and we can join new folder inside path.join()</li>
    <li>using res .writeHead we can give file status(200,404) with + content type using</li>
    <li>res.end(data to display)</li>
    </ul>
