// 1 задача //
let age = prompt('Буль ласка,свій вік:');

age = Number (age);

if (age < 18) {
    alert("Вам заборонено вхід");
} else if (age <= 65) {
    alert("Ласкаво просимо!");
} else {
    alert("будьте обережні!");
}
// 2 задача //
let n = prompt("Введіть число n:");

n = Number(n);

if (isNaN(n)) {
    alert("Ви ввели не число. Будь ласка, спробуйте ще раз.");
} else {
    console.log("Парні числа від 2 до " + n + ":");

    for (let i = 2; i <= n; i += 2) {
        console.log(i);
    }
}
// 3 задача //

let n = prompt("Введіть число для обчислення факторіалу:");

n = parseInt(n);

if (isNaN(n) || n < 0) {
    alert("Будь ласка, введіть додатне ціле число.");
} else {
    let factorial = 1;
    let currentNumber = 1;
    
    
    while (currentNumber <= n) {
        factorial *= currentNumber; 
        currentNumber++;
    }

    console.log(`Факторіал числа ${n} (${n}!) = ${factorial}`);
}
