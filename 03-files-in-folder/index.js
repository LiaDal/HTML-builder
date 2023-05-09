const fs = require('node:fs');
const path = require('node:path');

fs.readdir(path.join(__dirname, 'secret-folder'), (error, files) => {
  files.forEach(el => {
    const filePath = path.join(__dirname, 'secret-folder', el)
    const name = path.basename(filePath, path.extname(filePath))
    const extname = path.extname(filePath).slice(1)
      fs.stat(filePath, (error, stats) => {
        if(!stats.isDirectory()) {
        console.log(`${name} - ${extname} - ${stats.size}`)
        }})
   })
})
