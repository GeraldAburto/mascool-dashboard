const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.use('/build/dashboard', express.static(path.join(__dirname, 'build/dashboard')));

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/build/dashboard/index.html');
});

app.listen(PORT, error => (
  error
    ? console.error(error)
    : console.info(`Listening on port ${PORT}.`)
));