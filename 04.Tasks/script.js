// 1. Реализуйте функцию getUserData, которая принимает идентификатор пользователя (ID) в качестве аргумента 
// и использует fetch для получения данных о пользователе с заданным ID с удаленного сервера. 
// Функция должна возвращать промис, который разрешается с данными о пользователе в виде объекта. 
// Если пользователь с указанным ID не найден, промис должен быть отклонен с соответствующим сообщением об ошибке.
// Подсказка, с последовательностью действий:
// getUserData использует fetch для получения данных о пользователе с удаленного сервера. 
// Если запрос успешен (с кодом 200), функция извлекает данные из ответа с помощью response.json() 
// и возвращает объект с данными о пользователе. Если запрос неуспешен, функция отклоняет промис с сообщением об ошибке.
function getUserData(id) {
    let obj;
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => {
            if (response.status === 200) {
                return response.json();
            } else {
                return response.statusText;
            }
        });
}

getUserData(1).then(data => console.log(data));
getUserData(111111).then(data => console.log(data));

// 2. Реализуйте функцию saveUserData, которая принимает объект с данными о пользователе в качестве аргумента 
// и использует fetch для отправки этих данных на удаленный сервер для сохранения. 
// Функция должна возвращать промис, который разрешается, если данные успешно отправлены, или отклоняется в случае ошибки.
const user = {
    name: 'John Smith',
    age: 30,
    email: 'john@example.com'
    };

function saveUserData(user) {
    return fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    });
};

saveUserData(user).then(data => console.log(data));

// 3. Напишите функцию changeStyleDelayed, которая принимает идентификатор элемента 
// и время задержки (в миллисекундах) в качестве аргументов. 
// Функция должна изменить стиль элемента через указанное время.
function changeStyleDelayed(id, delay) {
    setTimeout(() => {
        document.getElementById(id).style.color = 'red';
    }, delay);
}

changeStyleDelayed('header', 1000)
