// let object;

// async function fetchData() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     object = await response.json();
//     return object;
// }

// console.log(fetchData());

let obj;

fetch("https://jsonplaceholder.typicode.com/users").then(response => {
    export const obj = response.json();
    return obj;
}).then(data => {
    console.log(data);
});

console.log(obj);