/**
 * Created by Lenovo on 2016/5/9.
 */

var  fs=require("fs");

fs.readFile("input.txt",function(err,data){
    if(err){
        console.log(err)
    }
    console.log("异步数据:"+data.toString())
})

var data=fs.readFileSync("input.txt");

    console.log("同步数据:"+data.toString());


console.log("程序结束");