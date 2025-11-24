//greet(name) - prints a greeting
//toCelsius(fahrenheit) - converts fahrenheit to celsius
//isAdult(age) - returns true if age >= 18
//randomBetween(min, max) - returns a random number between min and max

const greet = () => {
    console.log("Greetings!")
}

const toCelsius = (fahrenheit) => {
    return (fahrenheit - 32) * 5/9;
}

const isAdult = (age) => {
    return age >= 18;
}   

const randomBetween = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(randomBetween(9, 55))