/**
 * Created by Lenovo on 2016/5/6.
 */
var http=require("http");
var url=require("url");


function start(route){
    function onRequest(req,res){
        var pathname=url.parse(req.url).pathname;
        console.log("Request for " + pathname + " received.");
        res.writeHead(200,{"Content-Type":"text/plain"});
        res.write("hello world");
        route(pathname);
        res.end();

    }
    http.createServer(onRequest).listen(8888);
    console.log("server has started");
}

exports.start=start;