//Twój kod
const fs = require('fs');

fs.readdir('./data/zadanie02', (err, files) => {
    if (err === null){
        files.forEach(file => {
            let path = `./data/zadanie02/${file}`;
            fs.readFile(path, 'utf8', (err, data) => {
                if (err === null) {
                    console.log(data);
                }
                else {
                    console.log('Błąd podczas odczytu pliku!', err);
                }
            });
        });
    }
     else {
        console.log('Błąd podczas listowania katalogu!', err);
    }
});