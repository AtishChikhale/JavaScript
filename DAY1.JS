// sync
function additionA() {
    console.log('A is called')
}

function additionB() {
    console.log('B is called')
}
additionA()
additionB()

// async
// A ---- B ----- C
function addC() {
    setTimeout(function () {
        console.log('c is called')
    }, 1000)
}

function addD() {
    console.log('D is called')
}
addC()
addD()

// 3 Functions
// Create User ------- ID
// Get Userr By ID ---------- User Info
// Info display --------- Info display

function GetUserInfoDisplay() {
    setTimeout(function () {
        console.log('User Create')
    }, 3000)
    setTimeout(function () {
        console.log('Get Info By ID')
    }, 2000)
    setTimeout(function () {
        console.log('Display User Info')
    }, 1000)
}
GetUserInfoDisplay()


// call back hell
function GetInfoDisplay() {
    setTimeout(function () {
        console.log('User Created')
        setTimeout(function () {
            console.log('Get ID for User')
            setTimeout(function () {
                console.log('Get Info for User')
            }, 1000)
        }, 2000)
    }, 3000)
}
GetInfoDisplay()