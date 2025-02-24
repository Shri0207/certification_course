let promise=new Promise(function(resolve,reject){
    console.log("Wait for promise");
    setTimeout(function(){
        // let data="promise is resolved";
        let err="promise is rejected";
        reject(err);
    },2000)
})
 promise.then(function(data){
      console.log(data);
 })
.catch(function(err){
    console.log(err);
})
