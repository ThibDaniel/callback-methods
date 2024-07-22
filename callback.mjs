const fs = require('fs');


const filePath = 'output.txt';
const content = 'Hello, world! This is some text content.';


fs.writeFile(filePath, content, 'utf8', (err) => {
  if (err) {
    return console.error(err);
  }
  console.log('File has been written successfully!');
});