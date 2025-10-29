let x = 7

console.log(x == 7);

// //== Checks values only
//=== Checks both values and types

//>,< larger than, smaller than
//>=.<= Larger than or equals to, smaller than or equals to

//OPERATORS

//COMPARISON OPERATORS

if(x>5){
    console.log("x is larger than 5");
}else{
    console.log("x is not larger than 5");
}

if (x > 700) {
    console.log("x is larger than 700");
} else if (x > 400) {
    console.log("x is smaller than 700 but larger than 400");
} else {
    console.log("x is smaller than 400");
}

//LOGIC GATES

//&& AND gate
// || or gate
// ! NOT

age = 30;
weight = 70;

if(age >18 && weight > 50){
    console.log("Overweight for this age");
}else{
    console.log("Not overweight");
}

let money = true;
let vip = false;

if(money || vip) {
    console.log("Allowed Entry");
} else {
    console.log("Denied Entry");
}

let y = 8;

if (y <= 5) {
    console.log("y is not larger than 5");
}else{
    console.log("y is larger 5");
}
