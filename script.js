// 1.1. Создайте функцию mergeArrays, которая принимает два массива и возвращает новый массив, содержащий все
// элементы из обоих массивов. Используйте spread оператор для объединения массивов.
// mergeArrays([1, 2, 3], [4, 5, 6]); // Ожидаемый результат: [1, 2, 3, 4, 5, 6]
const mergeArrays = (arr1, arr2) => [...arr1, ...arr2];
console.log(mergeArrays([1, 2, 3], [4, 5, 6]));

// 1.2. Создайте функцию removeDuplicates, которая принимает любое количество аргументов и возвращает новый массив, содержащий только уникальные значения.
// Используйте rest оператор для сбора всех аргументов в массив а затем filter для определения дубликатов.
// removeDuplicates(1, 2, 3, 2, 4, 1, 5); // Ожидаемый результат: [1, 2, 3, 4, 5]
const removeDuplicates = (...args) => args.filter((item, index) => args.indexOf(item) === index);
console.log(removeDuplicates(1, 5, 2, 3, 2, 4, 1, 5));

// 2.1. Напишите функцию getEvenNumbers, которая принимает массив чисел в качестве аргумента и возвращает новый массив, содержащий только четные числа.
const getEvenNumbers = (arr) => arr.filter((item) => item % 2 === 0);
console.log(getEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// 2.2. Задача: Напишите функцию calculateAverage, которая принимает массив чисел в качестве аргумента и возвращает среднее значение этих чисел.
const calculateAverage = (arr) => arr.reduce((acc, item) => acc + item, 0) / arr.length;
console.log(calculateAverage([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// 2.3. Напишите функцию capitalizeFirstLetter, которая принимает строку в качестве аргумента и возвращает новую строку, в которой первая буква каждого слова является заглавной.
const capitalizeFirstLetter = (str) => str.split(' ')
    .map((item) => item[0].toUpperCase() + item.slice(1))
    .join(' ');
console.log(capitalizeFirstLetter('hello world mother fathers'));

// 3.1. Напишите функцию createCalculator, которая принимает начальное значение 
// и возвращает объект с двумя методами: add и subtract. Метод add должен увеличивать значение на переданное число, 
// а метод subtract должен уменьшать значение на переданное число. 
// Значение должно быть доступно только через методы объекта, а не напрямую.

function createCalculator(initialValue) {
    let number = initialValue;
    return {
        add: (plus) => number += plus,
        subtract: (minus) => number -= minus,
        getNumber: () => number
    }
}

const calculator = createCalculator(5);
console.log(calculator.getNumber()); // 5
calculator.add(10);
console.log(calculator.getNumber()); // 15
calculator.subtract(14);
console.log(calculator.getNumber()); // 1

// 4.1/ Напишите функцию createGreeting, которая принимает имя пользователя и возвращает функцию, 
// которая будет выводить приветствие с использованием этого имени.
// const greeting = createGreeting('John'); 
// greeting(); 
const createGreeting = (name) => {
    return () => console.log(`Hello, ${name}!`);
}
const greeting = createGreeting('Slava');
greeting();

// 5.1. Задача: Напишите функцию createPasswordChecker, которая принимает допустимую длину пароля в качестве аргумента и возвращает функцию для проверки введенного пароля. 
// Возвращаемая функция должна принимать пароль и возвращать true, 
// если его длина соответствует допустимой, и false в противном случае.
// const isPasswordValid = createPasswordChecker(8);
// console.log(isPasswordValid('password')); 
// false
// console.log(isPasswordValid('secret')); 
const createPasswordChecker = (length) => (password) => password.length >= length;
const pass = createPasswordChecker(8);
console.log(pass('password'));
console.log(pass('secret'));

// 6.1. Напишите рекурсивную функцию sumDigits, которая принимает положительное целое число в качестве аргумента и возвращает сумму его цифр.
// console.log(sumDigits(123)); 
// Ожидаемый результат: 6 (1 + 2 + 3)
// console.log(sumDigits(456789)); 
// Ожидаемый результат: 39 (4 + 5 + 6 + 7 + 8 + 9)

function sumDigits(number) {
    if (number < 10) {
        return number;
    } else {
        return number % 10 + sumDigits(Math.floor(number / 10));
    }
}
console.log(sumDigits(123));
console.log(sumDigits(456789));
