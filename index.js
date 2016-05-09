/**
 * Created by Lenovo on 2016/5/6.
 */
var server=require("./server");
var router=require("./route");


server.start(router.route)
console.log(__filename)
console.log(__dirname)
