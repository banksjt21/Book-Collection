/*  ===========================================================================
//  REQUIREMENTS
//  =======================================================================  */
const mongoose = require('mongoose');




/*  ===========================================================================
//  MONGOOSE CONNECTION
//  =======================================================================  */
mongoose.connect(process.env.DATABASE_URL);

const database = mongoose.connection;

database.on('connected', () => {
    console.log(`Connected to ${database.name} at ${database.host}:${database.port}`);
});