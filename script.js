// OPERATOR PRECEDENCE 
// loops 
    // - task bar bar repeat hota hai unko kam dikhany klye hum use krty hai loops ka 
    // - multi time print krny klye hum loops ka use krty hai 
// types of loops:
//     1. for loop ✅
//     2. while loop ✅
//     3. do while loop ✅ 
//     4. for in loop ✅
//     5. for of loop ✅
// syntax of for loop:
// for(initialization; condition; increament / decreament){
    // code of block which  u want to run 
// }
// i - 0
// i - 9
// 10
// i -> 10
// for(let i = 0; i < 20; i++){
//     console.log("hello world");
// }




// 1 - 10 numbers 
// for(let num1 = 0;num1 <= 50; num1++){
//     console.log(num1);
// }






// 10-1
// for(let num1 = 10; num1 >= 0; num1--){
//     console.log(num1,"hello world");
// }





// while loop
// let a = 0; 
// while (a <= 10) {
//     console.log("hello world");
//     a++;
// }

// syntax 
// initialization 
// while (condition){
    // statement to run 
    // increament / decreament 
// }



// do while loop 
// do {
    // statement
    // increament and decreament 
// } while (condition);



// let a = 11;
// must run at least one time 
// do {
//     console.log("hello world");
//     a++;
// } while (a<=10);


// let person = {
//     Name: "Naseeb Khan",
//     Age: 23,
//     Qualification: "BS"
// }
// console.log(person)
// for in loop 
// for (const key in person) {
//     console.log(key ,":", person[key]);
// }


// for of loop
// array 
let colors = ["red", "pink", "yellow", "black"];
for (const color of colors) {
    console.log(color);
}