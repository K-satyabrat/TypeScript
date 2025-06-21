// Object, Array , Tuple , Enum
console.log("objects ....");
// const person: {
//   firstName: string;
//   age: number;
//   xyz: { address: string };
//   skills: string[];
// } = {
//   firstName: "Krishna",
//   age: 16,
//   xyz: { address: "Goloka" },
//   skills: ["Reactjs", "nodejs"],
// };
// console.log(person.skills[0]);
// let favoriteLanguage : string[]
// favoriteLanguage = ["Hare","Krishna", ]
// //any
// let favoriteLanguage : any[]
// favoriteLanguage = ["Hare","Krishna", 23]// but ts loose its power
//Tuple-->
/**
Fixed Length: The number of elements is predetermined
Fixed Types: Each position has a specific type
Order Matters: The order of types must match exactly */
//
// // Basic tuple
// let coordinates: [number, number] = [10, 20];
// // Tuple with different types
// let personInfo: [string, number, boolean] = ["John", 25, true];
// // Tuple with optional elements (using ?)
// let rgb: [number, number, number, number?] = [255, 0, 0]; // 4th element optional
// // Tuple with rest elements
// let tupleWithRest: [string, number, ...boolean[]] = ["hello", 42, true, false, true];
// const person: {
//   name: string;
//   age: number;
//   skills: string[];
//   product: [number, string];
// } = {
//   name: "Krishna",
//   age: 16,
//   skills: ["divine", "kindness"],
//   product: [1000, "JivaAtma"],
// };
// Enum
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["AUTHOR"] = 1] = "AUTHOR";
    Role[Role["READ_uSER"] = 2] = "READ_uSER";
})(Role || (Role = {}));
var person = {
    name: "Krishna",
    age: 16,
    skills: ["divine", "kindness"],
    product: [1000, "JivaAtma"],
    role: Role.ADMIN,
};
if (person.role === Role.ADMIN) {
    console.log("admin");
}
