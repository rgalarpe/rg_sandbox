// readFileCallback.js

const fs = require('fs');

// Function to read file using callback
function readWordsCallback(filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file (Callback):', err);
            return;
        }
        try {
            const wordsArray = JSON.parse(data);
            console.log('Words contents (Callback):', wordsArray);
        } catch (parseErr) {
            console.error('Error parsing JSON:', parseErr);
        }
    });
}

// Call the function with the path to the data file
readWordsCallback('data.txt');
