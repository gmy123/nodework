/**
 * Created by Lenovo on 2016/5/9.
 */
var util=require("util");

function Base(){
    this.name="base";
    this.sayHello=function(){
        console.log("hello"+this.name);
    }
}

Base.prototype.showName=function(){
    console.log(this.name);
}

function Sub(){
    this.name="Sub";
}

util.inherits(Sub,Base);

var baseobj=new Base();
console.log(baseobj.name);
baseobj.sayHello();
baseobj.showName();

var subobj=new Sub();

subobj.showName();
//subobj.sayHello();
