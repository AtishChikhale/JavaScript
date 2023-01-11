document.write("Hello")

const sum = (a, b, c) => {
    console.log("Yes i am running : " + (a + b + c))
    a + b
}
setTimeout(sum, 1000, 1, 2, 7) 

// setInterval(function(){
//     alert("setinterval")
// },3000)

let a = setTimeout(function(){
    alert("i am inside of settimeout")
},5000)

let b = prompt("do u want to run the settimeout")
if("n" == b){
    clearTimeout(a)
}
console.log(a)
