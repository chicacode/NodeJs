const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8000;

console.log("HEllo expopress")

app.use(bodyParser.urlencoded({ extended: true }))

// Routesexpree-app

app.use(express.static(__dirname + '/views'));

// 404 - Not Found Page
app.use((req, res) => {
    res.status(404).sendFile(__dirname + '/views/404.html');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});