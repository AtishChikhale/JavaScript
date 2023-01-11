async function weather() {
    let delhiweather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("27 deg")
        }, 2000)
    })
    let bangloreweather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("27 deg")
        }, 5000)
    })
    // delhiweather.then(alert)
    // bangloreweather.then(alert)
    console.log("fetching delhi wether please wait...............")
    let delhiW = await delhiweather
    console.log("fetched delhi weather : " + delhiW)
    console.log("fetching banglore wether please wait...........")
    let bangloreW = await bangloreweather
    console.log("fetched banlore weather : " + bangloreW)
    return [delhiW, bangloreW]
}
const cherry = () => {
    console.log("hey i am cherry and i am now wating")
}

const main = async () => {
    console.log("Welcome to weather control room")
    let a = await weather()
    let b = await cherry()
}
main()