// 1. Создайте объект Person, представляющий человека, с следующими свойствами: name, age и gender. 
// Добавьте также методы introduce и changeName. Метод introduce должен выводить информацию о человеке, 
// включая его имя, возраст и пол. Метод changeName должен изменять имя человека на новое заданное значение.
// Person.name = "John";
// Person.age = 25;
// Person.gender = "male";
// Person.introduce(); // Ожидаемый результат: My name is John. I'm 25 years old and I identify as male.
// Person.changeName("Mike");
const Person = {
    name: "",
    age: 0,
    gender: "",

    introduce() {
        console.log(`My name is ${this.name}. I'm ${this.age} years old and I identify as ${this.gender}.`);
    },

    changeName(newName) {
        this.name = newName;
    }
}

Person.name = "John";
Person.age = 25;
Person.gender = "male";
Person.introduce(); // Ожидаемый результат: My name is John. I'm 25 years old and I identify as male.
Person.changeName("Mike");
Person.introduce();

// 2. Создайте объект Animal со свойством name и методом eat(), который выводит сообщение о том, что животное ест. 
// Создайте объект Dog со свойством name и методом bark(), который выводит сообщение о том, что собака лает. 
// Используйте одалживание метода eat() из объекта Animal для объекта Dog, 
// чтобы вывести сообщение о том, что собака ест.
// Dog.eat = Animal.eat;
// Dog.eat(); 
const Animal = {
    name: "Jivotnoe",
    eat() {
        console.log(`${this.name} is eating.`);
    }
}

const Dog = {
    name: "Rex",
    bark() {
        console.log(`${this.name} barks.`);
    }
}

Dog.eat = Animal.eat;
Dog.eat();

// 3. Создайте объект calculator с методами add(), subtract() и multiply(), 
// которые выполняют соответствующие математические операции над двумя числами. 
// Используйте методы call и apply для вызова этих методов с передачей аргументов.
// console.log(calculator.add.call(null, 5, 3)); 
// console.log(calculator.subtract.apply(null, [5, 3])); 
const calculator = {
    add(a, b) {
        return a + b;
    },
    subtract(a, b) {
        return a - b;
    },
    multiply(a, b) {
        return a * b;
    }
}

console.log(calculator.add.call(null, 5, 3)); 
console.log(calculator.subtract.apply(null, [5, 3])); 

// 4. Создайте класс Person, который имеет свойства name и age, а также метод introduce(), 
// который выводит сообщение с представлением имени и возраста персоны.
// const person = new Person("John", 25);
// person.introduce(); 
class Persons {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`My name is ${this.name}. I'm ${this.age} years old.`);
    }
}

const person = new Persons("John", 25);
person.introduce();

// 5. Создайте класс BankAccount, который представляет банковский счет. 
// У него должны быть свойства accountNumber (номер счета) и balance (баланс), 
// а также методы deposit(amount) для пополнения счета и withdraw(amount) для снятия денег со счета. 
// Класс должен иметь также статическое свойство bankName, которое содержит название банка.
// const account1 = new BankAccount("1234567890", 1000);
// account1.deposit(500); // Вывод: Deposited 500 into account 1234567890. New balance: 1500
// account1.withdraw(200); // Вывод: Withdrawn 200 from account 1234567890. New balance: 1300
// account1.withdraw(1500); // Вывод: Insufficient funds in account 1234567890
class BankAccount {
    balance;
    accountNumber;
    static bankName = "My Bank";
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited ${amount} into account ${this.accountNumber}. New balance: ${this.balance}`);
    }

    withdraw(amount) {
        if (amount > this.balance) {
            console.log(`Insufficient funds in account ${this.accountNumber}`);
            return;
        }
        this.balance -= amount;
        console.log(`Withdrawn ${amount} from account ${this.accountNumber}. New balance: ${this.balance}`);
    }
}

const account1 = new BankAccount("1234567890", 1000);
account1.deposit(500); // Вывод: Deposited 500 into account 1234567890. New balance: 1500
account1.withdraw(200); // Вывод: Withdrawn 200 from account 1234567890. New balance: 1300
account1.withdraw(1500); // Вывод: Insufficient funds in account 1234567890

// 6. Напишите рекурсивную функцию sumDigits, 
// которая принимает положительное целое число в качестве аргумента и возвращает сумму его цифр.
// console.log(sumDigits(123)); // Ожидаемый результат: 6 (1 + 2 + 3)
// console.log(sumDigits(456789)); // Ожидаемый результат: 39 (4 + 5 + 6 + 7 + 8 + 9)