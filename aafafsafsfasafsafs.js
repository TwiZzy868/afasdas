let x = 777;
let y = 13.13;
let z = "JS";
let q = true;

console.log(typeof x, x);
console.log(typeof y, y);
console.log(typeof z, z);
console.log(typeof q, q);

x = 1337;
y = 99.99;
z = "LOL";
q = false;

console.log(typeof x, x);
console.log(typeof y, y);
console.log(typeof z, z);
console.log(typeof q, q);

console.log(x + z);
console.log(Number(q));
console.log(String(x));

const info = {
    num: 42,
    txt: "secret",
    check: true,
    stuff: ["games", "music"]
};

console.log(JSON.stringify(info));

let num1 = Number(prompt("Вкажіть перше число:"));
let num2 = Number(prompt("Вкажіть друге число:"));
let num3 = Number(prompt("Вкажіть третє число:"));

let avg = (num1 + num2 + num3) / 3;
console.log("Середнє ареф: " + avg.toFixed(2));

let roundUp1 = Math.ceil(num1), roundUp2 = Math.ceil(num2), roundUp3 = Math.ceil(num3);
console.log("Округлення до найбільшого: ", roundUp1, roundUp2, roundUp3);

let roundDown1 = Math.floor(num1), roundDown2 = Math.floor(num2), roundDown3 = Math.floor(num3);
console.log("Округлення до найменшого: ", roundDown1, roundDown2, roundDown3);

let square1 = num1 * num1, square2 = num2 * num2, square3 = num3 * num3;
console.log("Квадртне: ", square1, square2, square3);


function checkDivisibility(num, divisor) {
    return num % divisor == 0 ? `ділиться на ${divisor}` : `не ділиться на ${divisor}`;
}

console.log(`{num1} {checkDivisibility(num1, 5)}, ${checkDivisibility(num1, 7)}`);
console.log(`{num2} {checkDivisibility(num2, 5)}, {checkDivisibility(num2, 7)}`);
console.log(`{num3} {checkDivisibility(num3, 5)}{checkDivisibility(num3, 7)}`);

let canFormTriangle = 
    (num1 + num2 > num3) 
    (num1 + num3 > num2)
    (num2 + num3 > num1)
