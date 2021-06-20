//引入 http 模块
const http = require('http');
const server = http.createServer((request,response)=>{
    let url = request.url;
    response.write(url);
    response.end();
});

server.listen(9090,'localhost',()=>{
    console.log('localhost:9090');
});


