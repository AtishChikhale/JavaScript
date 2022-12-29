// pending, resolve, reject
// async code manage
// asynck code sync execution
// async code parallel execution

let pro2 = new Promise(function (resolve, reject) {
    let a = 10
    let b = 10

    if (a == b) {
        resolve('a and b are equal')
    } else {
        reject('a and b are not equal')
    }
})
pro2.then(function (str) {
    console.log(str)
}, function (str) {
    console.log(str)
})

// program 2

let pro3 = new Promise(function(resolve, reject){
    let a = 90
    let b = 900

    if(a == b){
        resolve([11, 22, 33])
    }else{
        reject([-11, -22, -33])
    }
})
pro3.then(function(q1){
    console.log(q1[0])
},function(q2){
    console.log(q2[0])
})

// program 3

let pro4 = new Promise(function(resolve, reject){
    let a = 90
    let b = 90

    if(a == b){
        resolve([11, 22, 33])
    }else{
        reject([-11,-22, -33])
    }
})
pro4.then(function(q1){
    console.log(q1[0])
}).catch(function(q2){
    console.log(q2[0])
})

//program 4
let pro5 = new Promise(function(resolve, reect){
    let a = 90
    let b = 90

    if(a == b){
        resolve([])
    }
})