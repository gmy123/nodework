/**
 * Created by Lenovo on 2016/5/16.
 */
var express=require("express");
var app=express();

app.use(express.static("public"))
console.log(__dirname)
app.get("/html2.html",function(req,res){
    res.sendFile(__dirname+"/html2.html");
});

app.get("/process_get",function(req,res){
    response={
        "firstname":req.query.firstname,
        "lastname":req.query.lastname
    }
    console.log(response);
    res.end(JSON.stringify(response))
})



var server=app.listen("8081",function(){
    var host=server.address().address;
    var port=server.address().port;

    console.log("应用访问实例：http://%s:%s",host,port)
})