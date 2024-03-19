/*
Необходимо попросить пользователя ввести три числа.
Необходимо создать функцию, в которую мы должны передать эти три числа.
Функция должна определить максимальное, среди переданных ей значение и 
вывести сообщение: "Максимальное значение среди чисел N1, N2, N3 равно N."

Примечание: Условимся, что пользователь всегда вводит корректные значения, 
три числа. Проверять их не нужно.
*/

const maxOfNumbers = (first, second, third) => {
    let maxResult = first;
    if (second > maxResult) maxResult = second;
    if (third > maxResult) maxResult = third;
    return maxResult;
};

const firstInput = Number(prompt("Введите первое число: "));
const secondInput = Number(prompt("Введите второе число: "));
const thirdInput = Number(prompt("Введите третье число: "));

console.log(
    `Максимальное значение среди чисел ${firstInput}, ${secondInput}, ${thirdInput} равно ${maxOfNumbers(
        firstInput,
        secondInput,
        thirdInput
    )}.`
);
