// let p = fetch("https://goweather.herokuapp.com/weather/Ny")
// p.then((Response) => {
//     console.log(Response.status)
//     console.log(Response.ok)
//     console.log(Response.headers)
// }).then((value2) => {
//     console.log(value2)
// })

let p1 = fetch("https://goweather.herokuapp.com/weather/Ny")
p1.then((Response) => {
    return Response.json()
}).then((Response) => {
    console.log(Response)
})