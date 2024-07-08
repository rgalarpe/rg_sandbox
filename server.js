// server.js

const http = require('http');
const fs = require('fs');

// Function to handle HTTP requests
function handleRequest(req, res) {
    // Log request method and URL to console
    console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.url}`);

    // Set content type and status code for response
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // Check URL path and send different responses
    if (req.url === '/') {
        // Read and serve index.html
        fs.readFile('./index.html', 'utf8', (err, data) => {
            if (err) {
                console.error('Error reading file:', err);
                res.end('Error reading file.');
                return;
            }
            res.end(data);
        });
    } else if (req.url === '/about') {
        // Send an about page
        res.end('<h1>About Page</h1><p>Welcome to our simple HTTP server!</p>');
    } else {
        // Handle 404 - Not Found
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
}

// Create an HTTP server
const server = http.createServer(handleRequest);

// Start the server listening on port 3000
server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000/');
});
