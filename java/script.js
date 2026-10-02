// 1. Числа от 1 до 10 циклом for
for (let i = 1; i <= 10; i++) {
    console.log(i);
}


// 2. Числа от 10 до 1 в обратном порядке
for (let i = 10; i >= 1; i--) {
    console.log(i);
}


// 3. Сумма чисел от 1 до 100 — одним циклом
let sum = 0;

for (let i = 1; i <= 100; i++) {
    sum += i;
}

console.log("Сумма:", sum);


// 4. Массив из 5 городов: вывести каждый с номером
let cities = ["Алматы", "Астана", "Шымкент", "Караганда", "Актобе"];

for (let i = 0; i < cities.length; i++) {
    console.log((i + 1) + ". " + cities[i]);
}


// 5. Тот же массив через for...of
for (let city of cities) {
    console.log(city);
}


// 6. Со звёздочкой:
// каждое второе число до 20 — шаг i += 2
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}