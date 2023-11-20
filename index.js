/*
  It sets up our Express server, connects to your MongoDB database, and
  configures our application’s settings. It sets up middleware to parse 
  form data, serve static files, and use EJS layouts.
  It also sets the view engine to EJS and specifies the views directory.
  Finally, it starts the server on the specified port and logs a message to the console.
  If there’s an error starting the server, it logs the error message. 
*/

// Import necesarry modules
const express = require('express');
const db = require('./config/mongoose');
const port = process.env.PORT || 8000;
const app = express();
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

// Middleware to parse form data
app.use(express.urlencoded());

// Set static folder
app.use('/assets', express.static('assets'));

// Use EJS layouts
app.use(expressLayouts);

// Extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

// Set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');
app.set('views', path.join(__dirname, 'views'));

// Use express router
app.use('/', require('./routes'));

// Start the server
app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running the server: ${err}`);
  }
  console.log(`Server is running on port: ${port}`);
});