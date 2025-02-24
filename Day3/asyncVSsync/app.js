//sync

// console.log("First");
// console.log("Second");
// console.log("Third");

//async--setTimeout()

// console.log("First");
// console.log("Second");
//  setTimeout(function(){
//      console.log("it will run after 5sec");
//  },5000)

// console.log("Fourth");

//setInterval()

// setInterval(function(){
//     console.log("It will run after 2 sec");
// },2000)


let count=0;
let intervalID=setInterval(function(){
    count++;
    console.log(`my count is:${count}`);

    if(count==5){
        clearInterval(intervalID);
        console.log("Task completed");
    }
},1000)