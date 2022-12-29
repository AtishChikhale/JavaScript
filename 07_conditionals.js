let a = prompt('Hey whats your age')
a = parseInt(a)//converting the string to a number
if(a < 0){
    alert("This is invalid age")
}else if(a < 9){
    alert("You are a kid and  you cannot even think of driving")
}else if(a < 18 && a >= 9){
    alert('you are kid and you can think of driving after 18')
}else{
    alert('You can now drive as you above 18')
}

console.log('Done')
console.log('You can',(a < 18 ? 'not drive' : 'drive')) 