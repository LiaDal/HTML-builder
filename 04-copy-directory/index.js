const fs = require('node:fs');
const path = require('node:path');

const newFilePath = path.resolve(__dirname, 'files-copy');

fs.mkdir(newFilePath, () => {
    fs.readdir(path.resolve(__dirname, 'files'), (error, files) => {
        files.forEach(el => {
            const filePath = path.resolve(__dirname, 'files', el)
            const fileName = path.basename(filePath)
            fs.readFile(filePath, (error, data) => {
                fs.writeFile(path.join(newFilePath, fileName), data, (error) => {
                    error ? console.log('Error', error) : null
                 })
            })
        })
    }) 
})
