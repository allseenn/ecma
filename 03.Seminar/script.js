// Родительский объект робот-пылесос.
const VacuumCleaner = {
    Model: "vacuum cleaner",
    counterOfStarts: 0,
    isFull: false,
    isObstacle: false,
    startCleaning: function () {
        this.counterOfStarts++;
        // Добавим дополнительный вывод, чтобы знать чей метод мы вызвали.
        console.log('I am the method of VacuumCleaner');
        console.log('I am cleaning... I have been started: ', this.counterOfStarts, 'times.');
    },
    goCharge: function () {
        // Добавим дополнительный вывод, чтобы знать чей метод мы вызвали.
        console.log('I am the method of VacuumCleaner');
        console.log('I am going to charge...');
    }
};

// Дочерний объект робот-пылесос.
const DancingSeries = {
    // Объявляем новые свойства и переопределить свойство model.
    model: "dancing series",
    power: 200,
    batterySize: 2100,
    boxSize: 0.5,
    workTime: 45,
    isUVLampOn: false,
    // Добавляем новый метод.
    switchUVLamp: function () {
        // Добавим дополнительный вывод, чтобы знать чей метод мы вызвали.
        console.log('I am the method of DancingSeries');
        this.isUVLampOn = !this.isUVLampOn;
        console.log(`UV lamp is ${this.isUVLampOn ? 'working' : 'not working'}.`);
    },
    // Делаем ссылку на прототип от родителя.
    __proto__: VacuumCleaner,
};

// // Дочерне-дочерний объект робот-пылесос.
// const Samba = {
//     // Обновляем свойства под конкретную модель.
//     model: "Samba-1",
//     power: 250,
//     batterySize: 2500,
//     workTime: 50,
//     // Делаем ссылку на прототип от родителя.
//     __proto__: DancingSeries,

// };

// Объект робот-пылесос.
const Djaiv = {
    // Обновляем свойства под конкретную модель.
    model: "Djaiv-1",
    power: 250,
    batterySize: 2500,
    workTime: 50,
    // Переопределим метод startCleaning.
    startCleaning: function () {
        this.counterOfStarts++;
        // Добавим дополнительный вывод, чтобы знать чей метод мы вызвали.
        console.log('I am the method of Djaiv');
        console.log('I am Djaiv, and I am cleaning... I have been started: ', this.counterOfStarts, 'times.');
    },
    // Делаем ссылку на прототип от родителя.
    __proto__: DancingSeries,
};

// Объект робот-пылесос.
const MusicSeries = {
    // Объявляем новые свойства и переопределяем свойство model.
    model: "music series",
    power: 200,
    batterySize: 2100,
    boxSize: 0.5,
    workTime: 45,
    // Добавляем новый метод.
    startWipe: function () {
        // Добавим дополнительный вывод, чтобы знать чей метод мы вызвали.
        console.log('I am the method of MusicSeries');
        console.log('I am starting to wipe the floor...');
    },
    // Делаем ссылку на прототип от родителя.
    __proto__: VacuumCleaner,
};

// Объект робот-пылесос.
const Blues = {
    // Обновляем свойства под конкретную модель.
    model: "Bluees-1",
    power: 250,
    batterySize: 2500,
    workTime: 50,
};
// Установим прототип для робота.
Object.setPrototypeOf(Blues, MusicSeries);

// 1. Напишите функцию getPrototypeChain(obj), которая будет возвращать цепочку прототипов для заданного объекта
// obj. Функция должна вернуть массив прототипов, начиная от самого объекта и заканчивая глобальным объектом
// Object.prototype.

function getPrototypeChain(obj) {
    const protoChain = [];
    let currentObj = obj;
    while (currentObj) {
        protoChain.push(currentObj);
        currentObj = Object.getPrototypeOf(currentObj);
    }
    return protoChain;
}

//console.log(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(Djaiv)))));
console.log(getPrototypeChain(Blues));

// 2. Напишите конструктор объекта Person, который принимает два аргумента:name (строка) и age (число). 
//Конструктор должен создавать объект с указанными свойствами name и age и методом introduce(), который
// выводит в консоль строку вида "Меня зовут [name] и мне [age] лет.".
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.introduce = function () {
        console.log(`My name is ${this.name} and I'm ${this.age} years old.`);
    }
}

const Person1 = new Person("John", 25);
console.log(Person1.introduce());

// 3. Напишите конструктор объекта BankAccount, который будет представлять банковский счет. 
// Конструктор должен принимать два аргумента: accountNumber (строка) и balance (число). 
// Конструктор должен создавать объект с указанными свойствами accountNumber и balance и следующими методами:

// - deposit(amount): принимает аргумент amount (число) и увеличивает баланс на указанную сумму.
// - withdraw(amount): принимает аргумент amount (число) и уменьшает баланс на указанную сумму, 
// если на счету есть достаточно средств. Если средств недостаточно, выводится сообщение "Недостаточно средств на счете.".
// -  getBalance(): возвращает текущий баланс счета.

function BankAccount(accountNumber, balance){
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.deposit = function (amount) {
        this.balance += amount;
    }
    this.withdraw = function(amount){
        if(amount <= this.balance){
            this.balance -= amount;
        } else {
            console.log("Недостаточно средств на счете.");
        }
    }
    this.getBalance = function(){
        return this.balance
    }
}

const account1 = new BankAccount("1234567890", 1000);
console.log(account1.getBalance()); // Вывод: 1000
account1.deposit(500);
console.log(account1.getBalance()); // Вывод: 1500
account1.withdraw(200);
console.log(account1.getBalance()); // Вывод: 1300
account1.withdraw(2000); // Вывод: "Недостаточно средств на счете."

// 4. Создайте класс Animal, который будет представлять животное. У класса Animal должны быть следующие свойства и методы:
// - Свойство name (строка) - имя животного.
// - Метод speak() - выводит в консоль звук, издаваемый животным.
// Создайте подкласс Dog, который наследует класс Animal. Для подкласса Dog добавьте дополнительное свойство и метод:
// - Свойство breed (строка) - порода собаки.
// - Метод fetch() - выводит в консоль сообщение "Собака [name] принесла мяч.".
class Animal {
    constructor(name){
        this.name = name;
        }
    speak(){
        console.log(`Животное ${this.name} издает звук.`);
    }
}

class Dog extends Animal {
    constructor(name, breed){
        super(name);
        this.breed = breed;
    }
    fetch(){
        console.log(`Собака ${this.name} принесла мяч.`);
    }
}

const animal1 = new Animal("Животное");
animal1.speak(); // Вывод: Животное издает звук.
const dog1 = new Dog("Бобик", "Дворняжка");
dog1.speak(); // Вывод: Животное Бобик издает звук.
console.log(dog1.breed); // Вывод: Дворняжка
dog1.fetch(); // Вывод: Собака Бобик принесла мяч.

// 5
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    addItem(product, quantity) {
        this.product = product;
        this.quantity = 1;
    }
}

class ShoppingCart {
    constructor(name){
        this.customerName = name;
        this.initialTotalCost = 0;
    }
    getCurrentTotalCost() {
        return this.initialTotalCost;
    }
    addProduct(product, quantity) {
        this.initialTotalCost += (product.price * quantity);
    }
    checkout() {
        console.log(`Заказ оформлен для ${this.customerName}. Общая стоимость заказа: ${this.initialTotalCost} рублей. Спасибо за покупку!`);
    }

}

const Doll = new Product("doll", 1000);
const Car = new Product("car", 5000);
const ShoppingCart1 = new ShoppingCart("John");
ShoppingCart1.addProduct(Doll, 2);
ShoppingCart1.addProduct(Car, 2);
ShoppingCart1.addProduct(Doll, 1);
ShoppingCart1.checkout();