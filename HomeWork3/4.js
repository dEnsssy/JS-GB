/*
Необходимо реализовать четыре функции, каждая функция должна принимать по два
числа и выполнять одну из операций (каждая функция выполняет одну из них):
1. Сложение
2. Разность
3. Умножение
4. Деление
Необходимо сделать так, чтобы функция вернула число, например выражение
console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция
сложения в данном примере, ваши названия функций могут отличаться).
Округлять значения, которые возвращают функции не нужно, однако, обратите
внимание на разность, функция должна вычесть из большего числа меньшее, либо
вернуть 0, если числа равны.
Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать
не нужно.
Демонстрировать работы функций не обязательно.
*/

const plusNumbers = (a, b) => {
    return a + b;
};
const minusNumbers = (a, b) => {
    if (a === b) return 0;
    else if (a > b) return a - b;
    else if (a < b) return b - a;
};
const multiplyNumbers = (a, b) => {
    return a * b;
};
const divisionNumbers = (a, b) => {
    return a / b;
};
console.log(`Числа 2 и 6:
Сложение: ${plusNumbers(2, 6)},
Разность: ${minusNumbers(2, 6)},
Умножение: ${multiplyNumbers(2, 6)}, 
Деление: ${divisionNumbers(2, 6)}
`);
