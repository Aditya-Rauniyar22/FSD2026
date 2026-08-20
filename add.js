//let a = 10;
//let b = 20;

//console.log("Sum =", a + b);
// function sum(a, b){
//     return a + b;
// }
// function sumWithmsg(clbk,msg){
//     const result = clbk(10,20);
//     console.log(msg + result);
// }
// sumWithmsg(sum,"hey using calculation with js")
function login(msg, error) {
    if (msg) {
        console.log("Login Success = " + msg);
    } else {
        console.log("Login Failed = " + error);
    }
}

login("User Logged In", "Invalid Login");

