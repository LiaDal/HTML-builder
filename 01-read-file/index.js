const fs = require('node:fs');
const path = require('node:path');

let readStream = fs.createReadStream(path.resolve(__dirname, "text.txt"));
// readStream.on('open', () => {
// });
readStream.on('data', (data) => {
//   console.log(data);
  console.log(data.toString());
})
readStream.on('error', (err) => {
  res.end(err);
})
