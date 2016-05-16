/**
 * Created by Lenovo on 2016/5/10.
 */
var net=require("net");
var server=net.createServer(function(connection){
   console.log("client connectioned")
    connection.on("end",function(){
        console.log()
    });
    connection.write("hello world!\r\n");
    connection.pipe(connection);
});

server.listen(8080,function(){
    console.log("server is listening")
})