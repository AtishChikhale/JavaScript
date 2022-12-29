// add first n natural nums
/*
let sum = 0
let n = prompt('Enter the value of n')
n = Number.parseInt(n)
for(let i = 0; i < n; i++){
    sum += (i+1)
    // console.log((i+1), '+')
}
console.log('Sum of first ' + n + ' natural numbers is ' +sum)
// console.log(i)
*/

let obj = {
    'Atish' : 90,
    'Shubh' : 45,
    'Shivika' : 56,
    'Ritika' : 57,
    'Shiv' : 23
}
// for in loop
for(let a in obj){
    console.log('Marks of ' + a + ' are ' + obj[a])
}
// for of loop
for(let b of 'Atish'){
    console.log(b)
}