// readFilePromise.js

const fs = require('fs').promises;

// Function to read file using Promises
function readWordsPromise(filePath) {
    return fs.readFile(filePath, 'utf8')
        .then((data) => {
            try {
                const wordsArray = JSON.parse(data);
                console.log('Words contents (Promise):', wordsArray);
                return wordsArray;
            } catch (parseErr) {
                console.error('Error parsing JSON:', parseErr);
                throw parseErr;
            }
        })
        .catch((err) => {
            console.error('Error reading file (Promise):', err);
            throw err;
        });
}

// Call the function with the path to the data file
readWordsPromise('data.txt');
