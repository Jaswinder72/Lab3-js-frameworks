// Importing required modules
const express = require('express');

// Creating express application
const app = express();

// Route to display group names
app.get('/', (req, res) => {
    // Displaying group names using HTML elements
    res.send('<h1>Group 15</h1><ul><li>Jaswinder</li><li>Manav</li></ul>');
});

// Setting up server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
