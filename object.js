const obj = {
    first_name : "deepak",
    roll_num : 10,
    place : "chennai",
    dob: "10:10;1910"
};
// for in loop for obj
for(const x in obj){
    console.log(x + " is "  + obj[x]); // also obj.x is valid
}