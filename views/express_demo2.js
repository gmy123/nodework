/**
 * Created by Lenovo on 2016/5/16.
 */
var express=require("express");
var app=express();

app.get("/",function(req,res){
    console.log("主页get请求");
    res.send("Hello Get")
});


app.post("/",function(req,res){
    console.log("主页post请求");
    res.send("Hello Post");
})


app.delete("/del_user",function(req,res){
    console.log("del_user响应DELETE请求")
});

app.get("/list_user",function(req,res){
    console.log("/list_user GET请求");
    res.send("用户列表页面")
});

app.get("/ab*cd",function(req,res){
    console.log("ab*cd GET请求");
    res.send("正则匹配");
})

var server=app.listen("8081",function(){
    var host=server.address().address;
    var port=server.address().port;

    console.log("应用访问实例：http://%s:%s",host,port)
})