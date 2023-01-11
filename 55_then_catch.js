let p1 = new Promise(function (resolve, reject) {
    console.log("Promise is pending")
    setTimeout(() => {
        // console.log("I am a promise and I am resolved")
        resolve(true)
    }, 5000)
})

let p2 = new Promise(function (resolve, reject) {
    console.log("Promise is pending")
    setTimeout(() => {
        // console.log("I am a promise and I am rejected")
        reject(true)
    }, 5000)
})

// to get the value
p1.then((value) => {
    console.log(value)
})

// to catch the error
// p2.catch((error) =>{
// console.log("some error ocured in p2")
// })

p2.then((value) => {
    console.log(value)
}, (error) => {
    console.log(error)
})
