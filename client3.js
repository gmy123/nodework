/**
 * Created by Lenovo on 2016/5/11.
 */
var http=require("http");

var options={
    host:"localhost",
    pathname:"/index.html",
    port:"8081"
}
var callback=function(response){
    var body='';
    response.on("data",function(data){
        body+=data;
    });
    response.on("end",function(){
        console.log(body);
    })
}
var req=http.request(options,callback);
req.end();