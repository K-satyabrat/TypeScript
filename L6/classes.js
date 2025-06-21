"use strict";
console.log("Hare Krishna");
// class Department {
//   name: string;
//   constructor(n: string) {
//     this.name = n;
//   }
//   describe() {
//     console.log("Department", this.name);
//   }
// }
// const accounting = new Department("accounting");
// accounting.describe()
// const accountingCopy = {
//     name:"dummy",
//     describe: accounting.describe
// }
// accountingCopy.describe()
//private , public access modifier
class Department {
    constructor(n) {
        this.employee = [];
        this.name = n;
    }
    describe() {
        console.log("Department", this.name);
    }
}
const accounting = new Department("accounting");
accounting.describe();
