let arr = [3, 5, 8, 9, 12, 14]

// no need to do this
// let a = arr[0]
// let b = arr[1]
// let [a, b, c, d, ...rest] = arr 
// console.log(a, b, c, d, rest)
// let [a, , b, ...rest] = arr
// console.log(a, b, rest)
let { a, b } = { a: 1, b: 5 }
console.log(a, b)

// spred operator 
let arr1 = [3, 8, 5]
let obj = { ...arr1 }
console.log(obj)

function sum(v1, v2, v3) {
    return v1 + v2 + v3
}
console.log(sum(...arr1))


let obj2 = {
    name: "Atish",
    company: "Minskole",
    address: "afgcvs"
}

console.log({ ...obj2, name: "jhon", company:"Abc" })
console.log({ name: "jhon", company: "Abc", ...obj2 })