class Employee {
    constructor(name) {
        console.log(`${name} - Employee's constructor is here`)
        this.name = name
    }
    login() {
        console.log(`Employee has logged in`)
    }
    logout() {
        console.log(`Employee has lagged out`)
    }
    requestLeaves(leaves) {
        console.log(`Employee has requested ${leaves} leaves - Auto approved`)
    }
}

class Programer extends Employee {
    constructor(name) {
        super(name)
        console.log(`This is newly writen constructor`)
    }
    requestCoffe(x) {
        console.log(`Employee has requseted ${x} coffee`)
    }
    requestLeaves(leaves) {
        super.requestLeaves(4)
        console.log('On extra is granted')
    }
}
let e = new Programer("Atish")
e.login()
e.requestLeaves(3)