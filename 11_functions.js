// Arrow function
const hello = () => {
    console.log("Hey how are you. I am toh fine yaar")
    return "hi"
}
// function declaration
function onePluseAvg(x, y){
    return 1 + (x + y) / 2
}
// Arrow function
const sum = (p, q) => {
    return p + q
}

let a = 1
let b = 2
let c = 3
let v = hello()
console.log(v)
console.log("One pluse Average of a and b is",onePluseAvg(a, b))
console.log("One pluse Average of b and c is",onePluseAvg(b, c))
console.log("One pluse Average of a and c is",onePluseAvg(a, c))
console.log(sum(9, 7))