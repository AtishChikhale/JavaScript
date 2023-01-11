function loadScript(src, callback) {
    var script = document.createElement("script")
    script.src = src
    script.onload = function () {
        console.log("Loded script with SRC : " + src)
        callback(null, src)
    }
    script.onerror = function () {
        console.log("Error loading script with src : " + src)
        callback(new Error("src got some error"))
    }
    document.body.appendChild(script)
}

function hello(error, src) {
    if (error) {
        console.log(error)
        return
    }
    alert('Hello World!' + src)
}

function goodMorning(error, src) {
    if (error) {
        console.log(error)
        return
    }
    alert('Good Morning!' + src)
}

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js", goodMorning) 