/**
 * Created by Lenovo on 2016/4/29.
 */
/*var fs=require('fs');

fs.readFile('input.txt',function(err,data){
    if(err){
        console.log(err);
    }
    console.log(data.toString())
});
console.log("程序结束");*/

/*var buf=new Buffer(256);
len=buf.write('www.baidu.com');
console.log(buf.toString('utf-8',0,10));

var buf1=new Buffer("菜鸟教程");
var buf2=new Buffer('www.baidu.com');
var buf3=Buffer.concat([buf1,buf2]);
console.log('buf3的内容:'+buf3.toString());*/

/*
var fs=require('fs');
var data='';
var readStream=fs.createReadStream('input.txt');

readStream.setEncoding('utf-8');

readStream.on("data",function(chunk){
    data+=chunk;
});

readStream.on("end",function(){
    console.log(data);
})

readStream.on("error",function(err){
    console.log(err.stack)
});

console.log("程序结束了")
*/
/*var hello=require("./hello");
hello.world();

var h=require("./h");
var H=new h();

H.setName('gmy');
H.sayHello();*/

var fs=require("fs");
var data="www.gmy.com这是我的网站";
var writeStream=fs.createWriteStream("out.txt");

writeStream.write(data,"UTF8");
writeStream.end();

writeStream.on("finish",function(){
    console.log("写入完成");
})


writeStream.on("error",function(err){
    console.log(err.stack);
})



