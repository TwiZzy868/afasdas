const users = [
    { name: "Іван", age: 25 },
    { name: "Марія", age: 17 },
    { name: "Олексій", age: 30 },
    { name: "Анна", age: 16 },
    { name: "Петро", age: 22 },
  { name: "Софія", age: 19 },
  { name: "Михайло", age: 15 }
];
const adults = users.filter(user => user.age > 18);
const names = user.map(user => user.name);
let sumOfAllAges = 0;
//sumOfAllAges встановлюємо їй початкове значення 0 gav gav//
for(let i = 0; i < users.length; i++) {
    sumOfAllAges = sumOfAllAges + users[i].age;
}
const averageAge = sumOfAllAges / users.length;
console.log("Всі користувачі:");
console.log(users);

console.log("\nКористувачі старші 18 років:");
console.log(adults);

console.log("\nІмена всіх користувачів:");
console.log(names);

console.log("\nСередній вік користувачів:");
console.log(averageAge);