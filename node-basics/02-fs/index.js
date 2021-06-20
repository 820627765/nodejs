// 引入模块
const fs = require('fs');

fs.writeFile('./log.txt','hello',(err,data)=>{
    if(err){
        console.log('发生错误');
    }else{
        console.log('文件创建成功');
    }
});