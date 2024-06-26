function deepakfunc(){
    let p = new Promise(function(resolve){
        setTimeout(resolve("some data"),5000);
    })
    return p;
}
function main() {
   deepakfunc().then(function ondone(data){
    console.log(data)
   }) 
}
main();