// index.js

// Require and configure dotenv to load environment variables
require('dotenv').config();

const express = require('express');
const app = express();

// Define a route that responds with "Hello World"
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Define the port to listen on, defaulting to 3000 if not specified
const port = process.env.PORT || 3000;

// Start the server and log a message to the console once it's running
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
