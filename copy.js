/**
 * Created by Lenovo on 2016/5/6.
 */

var fs=require('fs');

var writeStream=fs.createWriteStream('out.txt');
var readStream=fs.createReadStream("input.txt");

readStream.pipe(writeStream);

console.log("程序结束");
