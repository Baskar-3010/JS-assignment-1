var people=["Greg","Mary","Devon","James"]
people.forEach(element => {
    console.log(element);
});
people.splice(people.indexOf("Greg"),1)
console.log(people);
people.splice(people.indexOf("James"),1)
console.log(people)
people.unshift("Matt")

console.log(people)
for(var i=0;i<people.length;i++){
    if(people[i]==="Mary"){
        break;
    }
}
var arr=[]
for(var i=0;i<people.length;i++){
    if(people[i]!="Mary" || people[i]!="Matt"){
        arr.push(people[i])
    }
}

console.log(arr);

console.log(people.indexOf("Mary"));
console.log(people.indexOf("Foo"));
var people=["Greg","Mary","Devon","James"]
people.splice(people.indexOf("Devon"),0,"Elizbeth","Arite")
console.log(people);

let withBob=people+"Bob"
console.log(withBob);