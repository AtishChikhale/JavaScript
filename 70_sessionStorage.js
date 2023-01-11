// sessionStorage.setItem("name","Atish")
// console.log(sessionStorage.getItem("name"))
// console.log(sessionStorage.removeItem("name"))
// console.log(sessionStorage.clear("name"))

window.onstorage = (e) => {
    aler("changed")
    console.log(e)
}
