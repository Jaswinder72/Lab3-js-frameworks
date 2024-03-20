// Importing required modules
const express = require('express');
const fs = require('fs');

// Creating express application
const app = express();

// Reading data from JSON file
const jsonData = JSON.parse(fs.readFileSync('C:\\Users\\kaurj\\OneDrive\\Desktop\\data\\data.json', 'utf-8'));

// Route to display JSON contents
app.get('/data', (req, res) => {
    // Displaying JSON contents
    res.json(jsonData);
});

// Setting up server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
