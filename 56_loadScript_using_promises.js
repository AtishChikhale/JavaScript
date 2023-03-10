const loadScript = (src) => {
    return new Promise((resolve, reject) => {
        let script = document.createElement("script")
        script.type = "text/javascript"
        script.src = src
        document.body.appendChild(script)
        script.onload = (script) => {
            resolve("script has been loded sir")
        }
        script.onerror = () => {
            reject(0)
        }
    })
}

let p1 = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js")
p1.then((value) => {
    console.log(value)
    return loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js")
}).then((value) => {
    console.log("second script ready")
}).catch((error) => {
    console.log("we are sorry but we having problems loading this script")
})