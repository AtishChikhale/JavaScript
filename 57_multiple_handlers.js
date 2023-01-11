let p1 = new Promise((resolve, reject) => {
    // alert("Hey i am not resolved")
    setTimeout(() => {
        resolve(1)
    }, 2000)
})

p1.then(() => {
    console.log("huarry")
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(4)
        }, 6000)
    })
}).then((value) => {
    console.log(value)
})

p1.then(() => {
    console.log("congratulations now this promise is resolved")
})