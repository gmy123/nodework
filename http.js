/**
 * Created by Lenovo on 2016/5/6.
 */

var http=require("http");

http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":"text/plain"});
   //req.setEncoding("utf8");
    res.write("运行程序");
    res.end();
}).listen(8888);
