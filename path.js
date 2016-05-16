/**
 * Created by Lenovo on 2016/5/10.
 */

var path=require("path");
var url="www.baidu.com//weibo/\hengda.html";

console.log(path.normalize(url));
console.log(path.resolve(url));
console.log(path.dirname(url));
console.log(path.parse(url));
console.log(path.extname(url))



