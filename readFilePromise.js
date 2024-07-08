// readFilePromise.js

const fs = require('fs').promises;

// Function to read file using Promises
function readFilePromise(filePath) {
    fs.readFile(filePath, 'utf8')
        .then((data) => {
            console.log('File contents (Promise):', data);
        })
        .catch((err) => {
            console.error('Error reading file:', err);
        });
}

// Call the function with the path to the sample file
readFilePromise('sample.txt');
