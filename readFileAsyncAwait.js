// readFileAsyncAwait.js

const fs = require('fs').promises;

// Function to read file using async/await
async function readWordsAsyncAwait(filePath) {
    try {
        const data = await fs.readFile(filePath, 'utf8');
        const wordsArray = JSON.parse(data);
        console.log('Words contents (Async/Await):', wordsArray);
        return wordsArray;
    } catch (err) {
        console.error('Error reading file (Async/Await):', err);
        throw err;
    }
}

// Call the function with the path to the data file
readWordsAsyncAwait('data.txt');
