
const promise = fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => { return response.json() });


const obj = promise.then(data => { return data });

console.log(obj);

