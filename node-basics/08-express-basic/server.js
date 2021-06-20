const express = require('express');

const app = express();

const router = require('./router/index.js');
app.use('/',router);

//监听8080端口
app.listen(8080,()=>{
    console.log('localhost:8080');
});