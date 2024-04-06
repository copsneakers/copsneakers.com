'use strict';
const express = require('express');
const path = require('path');
const app = express();

// Load View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Local request handlers.
app.get('/', (req, res) => {
  res.render('index', {title: "CopSneakers.com"});
});

// Route Files.
let about = require('./routes/about');
app.use('/about', about);

// Start Server.
let port = 3005;
app.listen(port, function(){
  console.log(`Server started on port ${port}...`);
});
