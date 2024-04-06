'use strict';
const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');
const router = express.Router();

// Define the directory where your static files are stored
const staticDirectory = path.join(__dirname, 'public'); // Change 'public' to the name of your directory

// Serve static files from the 'public' directory
app.use(express.static(staticDirectory));

// Link to views folder.
let views = path.join(__dirname, 'views');

// Home route.
router.get('/', (req, res) => {
  res.sendFile('index', {root:views, title: "CopSneakers.com"});
});

// Other routes.
router.get('/about', function(req, res){
  res.sendFile('about.html', { root: views });
});

app.use(bodyParser.json());
app.use('/.netlify/functions/server', router);  // path must route to lambda (express/server.js)

module.exports = app;
module.exports.handler = serverless(app);
