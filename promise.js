// syntactical sugar for writing call back
//non uglier way to write call back
//internally uses callbacks only
const fs = require('fs'); 
function myfunc() {
    return new Promise(function (resolve) {
        fs.readFile('file.txt', 'utf-8', function (err, data) {
            console.log("before resolve");
            resolve(data)
        });
    })
}
function ondone(data) {
    console.log(data + " printed through a promise");
}
myfunc().then(ondone);