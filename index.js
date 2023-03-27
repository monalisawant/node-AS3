const http=require("http")
const fs = require('fs');
const createHtml = require("create-html");
const create=createHtml({
    body:"<h1> Hello World </h1><p> This is monali.. </p>"

})
   fs.writeFile("index.html",create,function(err){
    if(err){
        console.log(err)
    }
   })
http.createServer((req,res)=>
{
    // res.writeHead(200,{"content-type":"text/html"})
    fs.readFile("./index.html",(err,data)=>{
        res.writeHead(200,{"content-type":"text/html"}) 
   
    res.write(data);
      return res.end()
    })
}).listen(8000)
console.log("server running")