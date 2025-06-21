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
  name: string;
  employee: string[];
  constructor(n: string) {
    this.name = n;
    this.employee= []
  }
  describe(this:Department) {
    console.log("Department", this.name);
  }
  addEmployee(emp:string){
    
  }
}

const accounting = new Department("accounting");
accounting.describe();
