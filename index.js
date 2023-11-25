//core Module
const fs = require('fs')
// local Module
const calc = require('./calc.js')
// third-party Modules
const axios = require('axios');

fs.readFile('halo.txt', 'utf-8', (err, data) => {
    if (err) {console.error(err)};

    console.log("Data:", data)
})

// Calculation
console.log(calc.addition(10, 20));
console.log(calc.substraction(20, 10));

// fetch API from jsonplaceholder
axios.get('https://jsonplaceholder.typicode.com/posts/1') 
.then(response => {
    console.log(response.data)
})