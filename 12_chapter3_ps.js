/*
let marks = {
    Atish : 90,
    shubham : 9,
    lovish : 56,
    monika : 4
}

//Q1
for(let i = 0; i < Object.keys(marks).length; i++){
    console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
}

//Q2
for(let key in marks){
    console.log("The marks of" + key + " are " + marks[key])
}

//Q3
let cn = 43
let i 
while(i != cn){
    console.log("Try again")
    i = prompt("Enter a number")
}
console.log("You entered correct number")
*/

//Q4
const mean = (a, b, c, d) => {
    return (a + b + c + d) / 4
}
console.log(mean(4, 5, 6, 7))

