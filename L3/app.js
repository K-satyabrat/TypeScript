console.log("hello....");
// interface Person  {
//   name: string;
//   age: number;
// };
var person = {
    name: "Hari",
    age: 16,
};
function greet(user) {
    console.log("Hi ".concat(user.name, " age ").concat(user.age));
}
greet(person);
