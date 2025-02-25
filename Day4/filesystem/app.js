 let fs=require('fs');

//perform CRUD operations 

let data="hello how are you";

//Task 1: Create a file and write data into it
//way 1
//  fs.writeFileSync('demo.txt',data,{    encoding:'utf-8',

//  },(err)=>{
//     if(err) throw err;
    //  console.log("File is created successfully");
// })


//ways 2

// fs.writeFileSync('demo.txt',data,
//     (err)=>{
//     if(err) throw err;
//     console.log("File is created successfully");
// });

//read file

// let fileread =fs.readFileSync('demo.txt');
// console.log(fileread.toString());

//update file
// fs.appendFileSync('demo.txt','\nI am fine');

//delete data
// fs.unlinkSync('demo.txt');


//write file using async
 fs.writeFile('demo.txt',data,(err)=>{
    if(err) throw err;
    console.log("File is created successfully");
    });


//read file using async
fs.readFile('demo.txt',(err,data)=>{
    if(err) throw err;
    console.log(data.toString());
});

//update file using async
fs.appendFile('demo.txt','\nI am fine',(err)=>{
    if(err) throw err;
    console.log("Data is updated successfully");
});

//truncate file
fs.truncate('demo.txt',4,(err)=>{
    if(err) throw err;
    console.log("Data is truncated successfully");
});

//delete file
fs.unlink('demo.txt',(err)=>{
    if(err) throw err;
    console.log("File is deleted successfully");
});