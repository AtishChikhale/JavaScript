class RailwayForm {
    constructor(givename, traino, address) {
        console.log("CONSTRUCTOR CALLED...... " + givename + " " + traino)
        this.name = givename
        this.traino = traino
        this.address = address
    }

    preview() {
        alert(this.name + " Your form is for train number : " + this.traino + " and your address is : " + this.address)
    }

    submit() {
        alert(this.name + ": Your form is submitted for train Number: " + this.traino)
    }

    cancal() {
        alert(this.name + ": This form is cancelled for train number : " + this.traino)
        this.traino = 0
    }
}
let Atish = new RailwayForm("Atish", 1325, "sambhaji nagar kharadi")
Atish.preview()
Atish.submit()
Atish.cancal()
Atish.preview()