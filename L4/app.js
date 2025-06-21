console.log("Hare Krishna");
function add(num1, num2) {
    return num1 + num2; //no return then void
}
// const sum = add(2, 3);
// console.log(sum);
// let combineFunction : Function;
// combineFunction = function(){}
// good practice
var combineFunction;
combineFunction = add;
console.log(combineFunction(100, 200));
// function with callback
function addHandle(num1, num2, cb) {
    var result = num1 + num2;
    cb(result);
}
addHandle(10, 20, function (re) {
    console.log(re);
});
