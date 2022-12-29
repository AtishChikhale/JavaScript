let mark_class_12 = [91, 82, 63, 84, false, "Not Present"]
console.log(mark_class_12[0])
console.log(mark_class_12[1])
console.log(mark_class_12[2])
console.log(mark_class_12[3])
console.log(mark_class_12[4])
console.log(mark_class_12[5])
console.log(mark_class_12[6])//will be undefined because index 6 dose not exist


console.log("The length of marks_class_12 is",mark_class_12.length)
mark_class_12[6] = 89//Adding new value to the array
mark_class_12[0] = 96//changing the value of an array
console.log(mark_class_12)
console.log(typeof mark_class_12)