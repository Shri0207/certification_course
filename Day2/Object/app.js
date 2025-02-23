//Object

// let person={
//     name:'Shri',
//     age:20,
//     favColor:'red'
// }

// console.log(person);
// console.log(person.age); 

//change property
// person.name='shri patil';
//  person.gender='Male';

// //delete property
// delete person.favColor;
// console.log(person);

// advanced object

let person={
    name:'Shri',
    age:20,
    favColor:'red',
    fun:function (){
        return(`hello i am ${this.name} and my age is ${this.age}`);
    },
    newObj :{
        gender : "male",
        address :"Shripewadi",
    }
}
// console.log(person.print());
//  console.log(person.fun());

console.log(person.newObj.address);
