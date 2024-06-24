// setTimeout() is async javaScript global function
// what it does? executes a function after a particular time
let val = 0;
let n = 50;
for(let i = 0; i<n; i++){
    val += i;
}
function print(){
    console.log("print is called")
}
setTimeout(print,5000); // 5seconds
console.log("async--> things context swithing");