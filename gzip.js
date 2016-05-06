/**
 * Created by Lenovo on 2016/5/6.
 */
var fs=require("fs");
var zlib=require("zlib");

/*
fs.createReadStream("input.txt").pipe(zlib.createGzip()).pipe(fs.createWriteStream("input.txt.gz"))*/
/*
fs.createReadStream("hello.js").pipe(zlib.createGzip()).pipe(fs.createWriteStream("hello.js.gz"))*/

fs.createReadStream("hello.js.gz").pipe(zlib.createGunzip()).pipe(fs.createWriteStream("hello.js"))
