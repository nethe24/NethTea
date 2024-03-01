// Import required modules
const express = require('express');

// Create an Express application
const app = express();

// Define a route for the root path
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Set the port for the server to listen on
const port = process.env.PORT || 3000;

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


