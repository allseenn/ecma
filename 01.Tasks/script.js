// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, 
// найти минимальное число в массиве, решение задание должно состоять из одной строки
const arr = [1, 5, 7, 9];
console.log(Math.min(...arr));

// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: 
// increment и decrement. Метод increment должен увеличивать значение счетчика на 1, 
// а метод decrement должен уменьшать значение счетчика на 1. 
// Значение счетчика должно быть доступно только через методы объекта, а не напрямую.
function createCounter() {
    let counter = 0;
    return {
        increment() {
            counter += 1;
        },
        decrement() {
            counter -= 1;
        },
        getNumber() {
            return counter;
        }
    }
}

const counter = createCounter();
counter.increment();
counter.increment();
counter.decrement();
console.log(counter.getNumber());

// 3) Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM
// и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.
// Пример
// const rootElement = document.getElementById('root');
// const targetElement = findElementByClass(rootElement, 'my-class');
// console.log(targetElement);

function findElementByClass(element, className) {
    if (element.classList.contains(className)) {
        return element;
    } else if (element.children.length > 0) {
        for (let i = 0; i < element.children.length; i++) {
            const child = element.children[i];
            const foundElement = findElementByClass(child, className);
            if (foundElement) {
                return foundElement;
            }
        }
    }
    return null;
}

const root = document.createElement('div');
root.id = 'root';
root.innerHTML = '<div class="my-class">Hello, World!</div>';
document.body.appendChild(root);

const rootElement = document.getElementById('root');
const targetElement = findElementByClass(rootElement, 'my-class');
console.log(targetElement);
