/**
 * Created by Lenovo on 2016/5/11.
 */
var http=require("http");
var url=require('url');
var fs=require("fs");

http.createServer(function(req,res){
    var pathname=url.parse(req.url).pathname;

    fs.readFile(pathname.substr(1),function(err,data){
        if(err){
            res.writeHead(404,{"Content-Type":"text/html"})
        }else{
            res.writeHead(200,{"Content-Type":"text/html"});
            res.write(data.toString())
        }
        res.end();
    })
}).listen(8081)

console.log("running at ")