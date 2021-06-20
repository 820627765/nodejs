const express = require('express');

const app = express();

/*
    1）请求会被所有的 use() 由上向下处理，只要能匹配上路径，就会处理，匹配方式是从前面开始，只要请求路径包含，就匹配。并且，一旦匹配了一个use，后面的use 就不会匹配了。
       如果希望匹配的下一个 use 也执行，可以怎么办呢？又一个next 参数，可以用来调用下一个use 或 回调栈的下一个
    2）在express中，回调函数又被称为“中间件”，且use()方法的回调，可以写很多个，然后在上一个回到中调用下一个即可。
    3）可以通过一个数组保存回调，作为回调栈。
 */
app.use('/',(req,res,next)=>{
    console.log('第一个回调');
    //调用下一个回调
    next();
},(req,res)=>{
    console.log('第二个回调');
    res.send('hello');
});

//用数组作为回调栈
app.use('/ajax',(req,res,next)=>{
    console.log('第一个匹配的use处理');
    //调用下一个use处理
    next();
});

const middlewares = [
    (req,res,next)=>{
        console.log('第一个回调');
        next();
    },
    (req,res,next)=>{
        console.log('第二个回调');
        next();
    },
    (req,res,next)=>{
        console.log('第三个回调');
    }
];
//用数组作为回调栈
app.use('/api',middlewares);

//如果之前的 use 执行了 next() 则最后会来执行无路径的use 。如果无路径的use 在最前面定义，则会先执行。所以 use的执行是有顺序的
app.use(()=>{

});


//监听8080端口
app.listen(8080,()=>{
    console.log('localhost:8080');
});