// Importing required modules
const express = require('express');

// Creating express application
const app = express();

// Route for CRUD operations
app.post('/create', (req, res) => {
    // Logic for creating data
    res.send('Data created successfully');
});

app.put('/update', (req, res) => {
    // Logic for updating data
    res.send('Data updated successfully');
});

app.delete('/delete', (req, res) => {
    // Logic for deleting data
    res.send('Data deleted successfully');
});

// Setting up server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
