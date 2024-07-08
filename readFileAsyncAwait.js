// readFileAsyncAwait.js

const fs = require('fs').promises;

// Function to read file using async/await
async function readFileAsyncAwait(filePath) {
    try {
        const data = await fs.readFile(filePath, 'utf8');
        console.log('File contents (Async/Await):', data);
    } catch (err) {
        console.error('Error reading file:', err);
    }
}

// Call the function with the path to the sample file
readFileAsyncAwait('sample.txt');
