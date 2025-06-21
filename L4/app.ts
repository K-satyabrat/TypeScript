console.log("Hare Krishna");

function add(num1: number, num2: number): number {
  return num1 + num2; //no return then void
}

// const sum = add(2, 3);
// console.log(sum);

// let combineFunction : Function;
// combineFunction = function(){}

// good practice
let combineFunction: (a: number, b: number) => number;
combineFunction = add;

console.log(combineFunction(100, 200));


// type Cb = (n:number)=> void
// function with callback
function addHandle(num1: number, num2: number, cb: (n: number) => void) {
  const result = num1 + num2;
  cb(result);
}
addHandle(10, 20, (re) => {
  console.log(re);
});
