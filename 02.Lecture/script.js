// Объект робот-пылесос.
const Roomba = { // Есть негласное правило называть объекты в алгоритмах с большой буквы.
    // Обычно сначала объявляют свойства объекта.
    model: "Romba-1",
    power: 200,
    batterySize: 2100,
    boxSize: 0.5,
    workTime: 45,
    counterOfStarts: 0,
    isFull: false,
    isObstacle: false,
    isUVLampOn: false,
    // После свойств объявляют его методы.
    startCleaning: function () {
        this.counterOfStarts++;
        console.log('I am cleaning... I have been started: ',
            this.counterOfStarts, 'times.');
    },
    goCharge: function () {
        console.log('I am going to charge...');
    },
    switchUVLamp: function () {
        this.isUVLampOn = !this.isUVLampOn;
        console.log(`UV lamp is ${this.isUVLampOn ? 'working' : 'not working'}.`);
    }
};


Roomba.startCleaning();
Roomba.switchUVLamp();
Roomba.switchUVLamp();
Roomba.switchUVLamp();

// Работа с this
const checkThis = function () {
    console.log(this);
}

checkThis()

const checkThisInObject = {
    testProperty: true,
    checkThis: function () {
        console.log(this);
    },
};
checkThisInObject.checkThis();


// Объект Roomba - робот-пылесос. Код самого объекта смотри в листинге 1.
// Объект робот-пылесос модель Tango.
// Обычно сначала объявляют свойства объекта.
const Tango = {
    model: "Tango-1",
    power: 300,
    batterySize: 3200,
    boxSize: 0.7,
    workTime: 60,
    counterOfStarts: 0,
    isFull: false,
    isObstacle: false,
    isUVLampOn: false,
    // После свойств объявляют его методы. А так как методы у новой модели такие же как и у старой, давайте позаимствуем их у объекта Roomba.
    startCleaning: Roomba.startCleaning,
    goCharge: Roomba.goCharge,
    switchUVLamp: Roomba.switchUVLamp,
};

// Объект робот-пылесос модель Samba.
const Samba = {
    model: "Samba-1",
    power: 250,
    batterySize: 2500,
    boxSize: 0.5,
    workTime: 50,
    counterOfStarts: 0,
    isFull: false,
    isObstacle: false,
    isUVLampOn: false,
    // На этот раз мы не будем создавать методы в объекте, мы постараемся их заимствовать непосредственно перед использованием.
    };

    // Обращение к свойствам объекта Samba.
console.log(Samba.model); // "Samba-1"
console.log(Samba.isFull); // false
// Одолжим методы из объекта Roomba.

Samba.startCleaning = Roomba.startCleaning;
Samba.switchUVLamp = Roomba.switchUVLamp;
Samba.goCharge = Roomba.goCharge;

// Вызов методов объекта.
setTimeout(Roomba.startCleaning, 1000);
// Установим свойства объекта isUVLampOn в true, чтобы продемонстрировать результат работы метода switchUVLamp.
Roomba.isUVLampOn = true;
// Результат вызова следующего метода зависит от значения, хранящегося в свойстве объекта, а также от того как этот метод был вызван (об этом поговорим чуть ниже).
setTimeout(Roomba.switchUVLamp, 2000);
setTimeout(Roomba.goCharge, 3000);

setTimeout( () => {Samba.startCleaning()}, 1000);
Samba.isUVLampOn = true;
setTimeout(() => {Samba.switchUVLamp()}, 2000);
setTimeout(Samba.goCharge(), 3000);

Roomba.startCleaning.call(Roomba);

const notARobot = {
    counterOfStarts: 10,
    };
Roomba.startCleaning.call(notARobot);

 