// // console.log("Hello Using Js");
// // //var a = 10;
// // //console.log("a=" + a);

// // // let a = 78;
// // // if (a > 50) {
// // // let a = 100;
// // // console.log("a inside the block=" + a);
// // // }
// // // console.log("a outside the block=" + a);
// // // as an expression
// // // const sum=function(a,b){
// // //     return a+b;
// // // }
// // // 

// // console.log("first")
// // // setTimeout(() => {console.log("second")}, 1000);
// // for(i=0;i<1000;i++){
// //     console.log("second");
// // }
// // console.log("third")
// // setTimeout(() => {
// //     setTimeout(() => {
// //         setTimeout(() => {
// //             console.log("Hello");
// //         }, 1000);
// //     }, 1000);
// // }, 1000);   
// // promises
// const myPromise = new Promise((resolve, reject) => {
//     username = "admin";
//     password = "admin123";
//     if (username === "admin" && password === "admin1263") {
//         resolve("Login successful");
//     } else {
//         reject("Invalid credentials");
//     }
// });
// myPromise.then((message) => {
//     console.log(message);
// }).catch((message) => {
//     console.log(message);
// }).finally(() => {
//     console.log("All the resources have been closed/memory released successfully");
// });
async function handlePromise(){


    try {
            await myPromise;
    } catch (error) {
        console.log(error); 
    }
    finally {
        console.log("All the resources have been closed/memory released successfully");
    }   