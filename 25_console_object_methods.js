console.log("log")
console.info("info")
console.warn("warn")
console.error("error")
console.assert("err" != false)
console.assert("err" == false)

console.time("forLoop")

for (let i = 0; i < 500; i++) {
    console.log(233)
}

console.timeEnd("forLoop")

console.log("WhileLoop")

let i = 0
while(i < 500){
    console.log(233)
    i++;
}
console.timeEnd("whileLoop")