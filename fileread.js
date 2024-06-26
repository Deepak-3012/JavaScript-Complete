// another usage of async is file reading
const fs = require("fs");

    fs.readFile('file.txt','utf-8',function(err,data){
        console.log(data);
    })

console.log("even though i am below, will be printed first cuz the above is async func")