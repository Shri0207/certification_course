//for-each()

//  let arr=[1,2,3,4,5];
// arr.forEach(function(item,index){
//     console.log(`my index is ${index} and value is ${item*item}`);
// })

//map()
// let marks=[10,15,18,9,28,12,5,40];
// let newMarksArray=marks.map(function(item,index){
//     return[item*2,index];

// })
// console.log(marks);

//filter
let arr=[1,2,3,4,5];
let newArr=arr.filter(function(item,index){
    if(item>=3){
        console.log(item)
        return true;
    }
    return false;
})
// console.log(newArr);