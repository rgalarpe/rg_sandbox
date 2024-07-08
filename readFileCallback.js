// readFileCallback.js

const fs = require('fs');

// Function to read file using callback
function readFileCallback(filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }
        console.log('File contents (Callback):', data);
    });
}

// Call the function with the path to the sample file
readFileCallback('sample.txt');
