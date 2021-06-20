const express = require('express');

//获取路由中间件
const router = express.Router();

router.get('/',(req,res,next)=>{
    res.send('ok!');
});

//接收get请求，和use() 不一样的是，这里的匹配是精确匹配
router.get('/index',(req,res,next)=>{
    const queryParam = req.query; //获取到get请求参数对象,是一个json类型
    res.send('index pages' + queryParam);
});

//接收post请求
router.post('/index',(req,res,next)=>{
    const queryParam = req.query; //获取到请求参数对象,是一个json类型
    res.send('index pages' + queryParam);
});

module.exports = router;