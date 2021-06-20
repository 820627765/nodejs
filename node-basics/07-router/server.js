const http = require('http');
const fs = require('fs');

const app = http.createServer((req,res)=>{
    const urlString = req.url;
    console.log(urlString);
    

    switch(urlString){
        case '/':
            res.end('hello');
            break;
        case '/home':
            fs.readFile('./home.html',(err,content)=>{
                res.end(content);
            });
            break;
        case '/app.js':
            fs.readFile('./app.js',(err,content)=>{
                res.end(content);
            });
            break;
        case '/abc.jpg':
            fs.readFile('./abc.jpg',(err,content)=>{
                res.end(content);
            });
            break;
        default :
            res.end("page 404 !");
    }
}).listen(8080,()=>{
    console.log('localhost:8080');
});