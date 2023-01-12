let p = 9
function x() {
    let a = 8
    console.log(p)
    console.log(a)
}
x()
console.log(p)
// console.log(a) //it will give ReferenceError, because a is declared inside function it has blocked scope