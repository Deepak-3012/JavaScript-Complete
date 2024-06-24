    const data  = [{
        person : "thomas",
        role : "leader",
    },
{
    person : "john",
    role : "member"
},
{
    person : "arthur",
    role : "head"
}];
for(let i = 0; i<data.length; i++){
    console.log(data[i].person +" " + data[i]["role"])
}