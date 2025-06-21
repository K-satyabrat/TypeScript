console.log("hello....");

//UNION , LITERAL TYPES , TYPES ALIAS/COSTOM TYPES

//UNION

//LITERAL TYPES
// function combine(
//   num1: number | string,
//   num2: number | string,
//   conversionType: "as-number" | "as-string"
// ) {
//   let result;
//   if (
//     (typeof num1 === "number" && typeof num2 === "number") ||
//     conversionType === "as-number"
//   ) {
//     result = +num1 + +num2;
//   } else {
//     result = num1.toString() + num2.toString();
//   }
//   return result;
// }

// const sum1 = combine("10", "20", "as-number");
// const sum2 = combine(10, 50, "as-number");
// const combinedName = combine("satya", "Mernstack", "as-string");
// console.log(sum1, sum2, combinedName);

//TYPES ALIAS/ COSTOM TYPES

// type Combinable = number | string;
// type ConversionType = "as-number" | "as-string";

// function combine(
//   num1: Combinable,
//   num2: Combinable,
//   conversionType: ConversionType
// ) {
//   let result;
//   if (
//     (typeof num1 === "number" && typeof num2 === "number") ||
//     conversionType === "as-number"
//   ) {
//     result = +num1 + +num2;
//   } else {
//     result = num1.toString() + num2.toString();
//   }
//   return result;
// }

// const sum1 = combine("10", "20", "as-number");
// const sum2 = combine(10, 50, "as-number");
// const combinedName = combine("satya", "Mernstack", "as-string");
// console.log(sum1, sum2, combinedName);

// 2nd exmaple

type Person = {
  name: string;
  age: number;
};

// interface Person  {
//   name: string;
//   age: number;
// };
const person: Person = {
  name: "Hari",
  age: 16,
};

function greet(user:Person){
    console.log(`Hi ${user.name} age ${user.age}`)
}
greet(person)