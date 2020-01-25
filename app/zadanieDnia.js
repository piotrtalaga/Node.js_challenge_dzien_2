//Twój kod

const fs = require('fs');
let path;
if(process.argv.length===3){
    path = process.argv[2];
}

fs.readFile(path, 'utf8', (err, data) => {
    if (err === null) {
        let outcome = [];
      for(let i =0; i<data.length; i++) {
          if (i % 2 === 0) {
              outcome[i] = data.charAt(i).toLowerCase();
          } else {
             outcome[i] = data.charAt(i).toUpperCase();
          }
      }
     console.log(outcome.join(''));
    }
    else {
        console.log('Błąd podczas odczytu pliku!', err);
    }
});