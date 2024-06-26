// even if we are creating our own aync funtion 
// we still have to use default async funtions inside
const fs = require('fs');
function myasyncfunc(callback){
    fs.readFile('file.txt','utf-8',function(err,data){
        callback(data);
    })
}
function ondone(data){
    console.log(data);
}
myasyncfunc(ondone);
