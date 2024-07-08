// runAllScripts.js

const { exec } = require('child_process');

// Function to run a script
function runScript(scriptName) {
    exec(`node ${scriptName}`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing ${scriptName}:`, error);
            return;
        }
        if (stderr) {
            console.error(`Error output from ${scriptName}:`, stderr);
            return;
        }
        console.log(`Output from ${scriptName}:\n${stdout}`);
    });
}

// Run all scripts
runScript('readFileCallback.js');
runScript('readFilePromise.js');
runScript('readFileAsyncAwait.js');
