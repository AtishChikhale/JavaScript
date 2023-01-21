let obj1 = {
  name: "rahul",
  rollno: 44,
  Address: "wagholi",
};

let obj2 = {
  name: "rahul",
  rollno: 44,
  Address: "wagholi",
};

function check(obj1, obj2) {
  for (key in obj2) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}
console.log(check(obj1, obj2));
