//functions

// function Details(){
//     this.name="shri";
//     this.age=20;
//     this.address="nipani"
// }

// let user = new Details();
// console.log(user.name);

//custom constructor function

function Details(name,age,address){
    this.name=name;
    this.age=age;
    this.address=address;
    this.description=function(){
        return(`my name is ${this.name},my age is ${this.age}`);
    }
}

let user = new Details("shri",20,"nipani");
console.log(user);
let user1 = new Details("shrinu",18,"nipani");
console.log(user1);

console.log(user.description());
console.log(user1.description());


