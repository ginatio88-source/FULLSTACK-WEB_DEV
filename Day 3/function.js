//A function is a reusable block of code that you can represent with a name.

x = 1

function addOne(){
    x = x + 1
}

addOne()
addOne()
addOne()
addOne()
addOne()

function addTwo(num){
    x = x + 2
}

addOne()
addOne()

function convertXtoPounds(){
    x = x * 2.2
}

convertXtoPounds()

console.log(x)

//Arguments

let myheight =167
let friendHeight = 175

function cmToFeet(height){
    return height * 0.0328
}

console.log(cmToFeet(myheight));
console.log(cmToFeet(friendHeight));

myHeightToFeet = cmToFeet(myheight);

console.log(myHeightToFeet);