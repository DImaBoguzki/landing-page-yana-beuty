const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 5003;
const app = express();


// for post method, set all post request to json array
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, '/build')))
// Anything that doesn't match the above, send back index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/build/index.html'))
})

app.listen(PORT, () => {
    console.log(`Server run on ${PORT}`);
});

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, '/build')))
// Anything that doesn't match the above, send back index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/build/index.html'))
})