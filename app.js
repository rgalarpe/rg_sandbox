const express = require('express');
const app = express();
const port = 3000;
// on github workspace add <port>.app before the github.dev 
// Middleware function to log request method and URL
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
};

// Applying middleware globally
app.use(logger);

// Middleware function to simulate authentication
const authenticate = (req, res, next) => {
    const token = req.headers.authorization;
    if (token === 'Bearer 1005757') { // Corrected to Bearer token format
        next();
    } else {
        res.status(401).send('Unauthorized');
    }
};

// Protected route with authentication middleware
app.get('/protected', authenticate, (req, res) => {
    res.send('Welcome to the protected route');
});

// Home route
app.get('/', (req, res) => {
    res.send('Welcome to Express App');
});

// About route
app.get('/about', (req, res) => {
    res.send('About Us');
});

// Dynamic route with parameter
app.get('/user/:id', (req, res) => {
    res.send(`User ID: ${req.params.id}`);
});

// Handling 404 Not Found
app.use((req, res, next) => {
    res.status(404).send('404 Not Found');
});

// Starting the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
