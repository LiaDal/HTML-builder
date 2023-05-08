const fs = require('node:fs');
const path = require('node:path');
const { readdir } = require('fs');

const stylesPath = path.resolve(__dirname, 'styles');
const streamWrite = fs.createWriteStream(path.resolve(__dirname, 'project-dist', 'bundle.css'));

readdir(stylesPath, {withFileTypes: true}, (error, styles) => {
    for(const style of styles) {
        if(style.isFile() && path.extname(style.name) === '.css') {
            const readStream = fs.createReadStream(`${stylesPath}/${style.name}`);
            readStream.on('data', files => {
                streamWrite.write(files);
            })
        }
    }
})