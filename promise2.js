//Promise is just a class
// helps to send data from one place to another
//Promise takes a function with resolve parameter 
const p = new Promise(function (func) {
    func("some data");
})
function ondone(data) {
    console.log(data);
}
console.log(p) // before resolving you will see Promise{<pending>}
// after resolving you will see Promise{your data}
p.then(ondone);