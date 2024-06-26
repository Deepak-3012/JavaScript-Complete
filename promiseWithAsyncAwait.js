// async await --> eliminates then, and callback--> still uses callbacks internally
function deepakfunction(){
    let p = new Promise(function(resolve){
        //doing some async oepration will make some sense-->other wise no need of this
        setTimeout(resolve("my data :)"),5000)
    })
    return p;
}
async function main(){
    let value = await deepakfunction(); // thread will wait here for resolve
    console.log(value);
} 
// await cant be used outside async function
main();
// all callback, promise, async await mostly do the same thing--> just cleaner syntax