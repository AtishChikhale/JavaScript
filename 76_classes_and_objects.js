class RailwayForm {
    submit() {
        alert(this.name + ": Your form is submitted for trainnumber : " + this.trainno)
    }
    clancal() {
        alert(this.name + ": This form is cncalled for trainnumber : " + this.trainno)
    }
    fill(givenname, trainno) {
        this.name = givenname
        this.trainno = trainno
    }
}

let atishForm = new RailwayForm()
atishForm.fill("Atish",123456)

let rohanForm1 = new RailwayForm()
let rohanForm2 = new RailwayForm()

rohanForm1.fill("Rohan",123456789)
rohanForm2.fill("Rohan2",12389)

atishForm.submit()
rohanForm1.submit()
rohanForm2.submit()
rohanForm1.clancal()
