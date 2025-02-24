//async-await

async function abcd(a,b) {
    console.log("Wait for promise");
    console.log(a);

   let data=await fetch(' https://api.tvmaze.com/search/shows?q=girls');
   console.log(data.json());
   console.log(b);
}
console.log(abcd(2,4));