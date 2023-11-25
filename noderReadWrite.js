// core module
const fs = require('fs');
const payload = `
aku coba membuat file write and read di FS
`
// baca dari file
fs.readFile('halo.txt', 'utf-8', (err, data) => {
    if (err) { console.error(err) };

    console.log("data :", data);
});

// Menulis file dan isinya
fs.writeFile('halo.txt', payload,  (err, data) => {
    if (err) { console.error(err) };

    console.log("Data seuccessfuly wirted");
});