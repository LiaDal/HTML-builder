const fs = require('node:fs');
const process = require('node:process');
const { stdin, stdout } = process;
const path = require('node:path');

let streamWrite = fs.createWriteStream(path.resolve(__dirname, 'text.txt'));
console.log('What do you think of Node.js?')
stdin.on('data', (data) => {
    if(data.toString().trim() == 'exit') {
      console.log('Thank you for your valuable feedback'); 
      process.exit();  
    }
      streamWrite.write(data);
});

process.stdin.resume();

process.on('SIGINT', () => {
  console.log('Thank you for your valuable feedback!');
  process.exit(); 
});




