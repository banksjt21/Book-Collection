/*  ===========================================================================
//  REQUIREMENTS
//  =======================================================================  */
//  Configuration
require('dotenv').config();
require('./config/database');


//  Modules
const express = require('express');
const path    = require('path');
const favicon = require('serve-favicon');
const logger  = require('morgan');


//  Routes
const bookRoutes = require('./routes/api/books.js');




/*  ===========================================================================
//  CREATE EXPRESS APPLICATION
//  =======================================================================  */
const app = express();




/*  ===========================================================================
//  MIDDLEWARE
//  =======================================================================  */
//  Concise output colored by response status for development use. The :status token will be colored green for success codes, red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for information codes.
app.use(logger('dev'));


//  Returns middleware that only parses json and only looks at requests where the Content-Type header matches the type option.
app.use(express.json());


//  Node.js middleware for serving a favicon. This module caches the icon in memory to improve performance by skipping disk access.
app.use(favicon(path.join(__dirname, "build", "favicon.ico")));


//  This is a built-in middleware function in Express. It serves static files and is based on serve-static.
app.use(express.static(path.join(__dirname, "build")));




/*  ===========================================================================
//  ROUTES
//  =======================================================================  */
app.use('/api/books', bookRoutes);


// The following "catch all" route (note the *) is necessary to return the index.html on all non-AJAX requests
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
});




/*  ===========================================================================
//  LISTENER
//  =======================================================================  */
//  Read the port # from .env file or set it to 3001 if missing
const PORT = process.env.PORT || 3001;


//  Listen on port 3001
app.listen(PORT, () => {
    console.log(`Express app is running on port: ${PORT}`);
});