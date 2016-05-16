/**
 * Created by Lenovo on 2016/5/9.
 */

var http=require("http");
var util=require("util");
var url=require("url");
var querystring=require("querystring");


/*
http.createServer(function(req,res){
    res.writeHeader(200,{"Content-Type":"text/plain"});
    res.end(util.inspect(url.parse(req.url,true)))
}).listen(3000)*/

http.createServer(function(req,res){
    var post="";

    req.on("data",function(chunk){
        post+=chunk;
    });
    req.on("end",function(){
        post=querstring.parse(post);
        res.end(util.inspect(post))
    })
}).listen(3000)
