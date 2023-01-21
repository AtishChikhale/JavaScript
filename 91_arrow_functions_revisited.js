const sayHello = name => {
    console.log("greeting" + " " + name)
    console.log("hi")
}

const x = {
    name: "Atish",
    role: "js Devloper",
    exp: "don't have",
    show: function () {
        // let that = this
        // console.log(this)
        setTimeout(() => {
            console.log(`The name is ${this.name}\nThe role is ${this.role}`)
        }, 2000)
    }
}
sayHello("Atish", "Good Afternoon")
console.log(x.name, x.exp)
x.show()