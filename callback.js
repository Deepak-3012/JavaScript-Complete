// callback -> a function taking another function as an argument
function compute(a , b, fn){
    const res  = fn(a,b);
    return res;
}
function mult(a,b){
    return a *  b;
}
function div(a, b){
    return a/b;
}
final_res = compute(5,6,mult);
console.log(final_res);