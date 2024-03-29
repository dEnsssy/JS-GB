/*
Используя Math.random() необходимо сгенерировать массив, содержащий 5 цифр в 
диапазоне [0, 9].
После создания массива необходимо вывести в консоль следующие значения:
1. Сумму элементов массива
2. Минимальное значение в массиве
3. Новый массив, содержащий индексы сгенерированного выше массива, в которых 
значение равно 3.
Пример: Если у нас сгенерировался массив [2, 3, 5, 7, 3], то мы должны вывести 
в консоль массив [1, 4]. Такой массив получился потому что в сгенерированном
массиве тройки лежат под индексами 1 и 4. Если троек в сгенерированном массиве
не окажется, значит нужно будет вывести пустой массив.
*/

// Здесь пишем решение, данный комментарий необходимо стереть.
const newArray = [];
const arrayThree = [];
let sum = 0;
let min = 9;
for (let i = 0; i < 5; i++) {
    newArray.push(Math.floor(Math.random() * (9 - 0 + 1)));
}
for (let i = 0; i < newArray.length; i++) {
    sum += newArray[i];
    if (newArray[i] < min) min = newArray[i];
    if (newArray[i] === 3) arrayThree.push(i);
}
console.log(`${newArray}
${sum} - сумма,
${min} - минимальное значение,
${arrayThree} - массив с индексами.
`);
