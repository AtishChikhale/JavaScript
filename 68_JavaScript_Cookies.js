console.log(document.cookie)
document.cookie = "name=Atish"
document.cookie = "name2=Atish_101"
document.cookie = "name3=Atish1"
let key = prompt("enter your key")
let value = prompt("enter your value")
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
console.log(document.cookie)