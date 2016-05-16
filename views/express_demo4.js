/**
 * Created by Lenovo on 2016/5/16.
 */
var express=require("express");
var app=express();
/*var bodyParser=require("body-parser");
var urlcodedParser=bodyParser.urlencoded({extended:false})*/

app.use(express.static("public"))

app.get("/html2.html",function(req,res){
    res.sendFile(__dirname+"/html2.html");
});
console.log(__dirname)
app.post("/process_get", function(req,res){
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