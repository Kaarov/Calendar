// Access-Control-Allow-Origin: *;


const url = 'https://jsonplaceholder.typicode.com/todos/1';
const url1 = 'http://127.0.0.1:8000/bookingitem/';

fetch(url1)
    .then(res => res.json())
    .then(data => console.log(data))

//
// function showInfo(data) {
//     console.log(data);
// }

// const url = 'test.json';
// let response = await fetch(url);
//
// let commits = await response.json(); // читаем ответ в формате JSON
//
// console.log(commits);


// const data = { location:  }
// const options = {
//     method: 'get',
//     headers : {
//       'Content-Type': 'applications/json',
//     },
//     body : JSON.stringify(data),
// };
// fetch(`http://127.0.0.1:8000/bookingitem/`, options)
//     .then(resp => resp.json())
//     .then(data => {console.log(data)});