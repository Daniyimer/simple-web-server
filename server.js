const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/name', (req, res) => {
    res.send('Daniel Tesfaye');
});

app.get('/hobby', (req, res) => {
    res.json({ hobbies: ['Reading books', 'Playing chess', 'Hiking', 'Cooking'] });
});

app.get('/dream', (req, res) => {
    res.send('My dream is to become a successful software developer.');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

