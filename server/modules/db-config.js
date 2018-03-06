// Mongoose
const mongoose = require('mongoose');

// MongoDB Name
const databaseName = 'SWAPIfavs';

// Mongo connection URI
let monguURI = ''

if(process.env.MONGODB_URI != undefined){
    // use the value from the environment variable
    mongoURI = process.env.MONGODB_URI;
} else {
    // use the local database
    mongoURI = 'mongodb://localhost:27017/' + databaseName;
}

mongoose.connection.on('connected', () => {
    console.log('mongoose connected to:', mongoURI);
});
mongoose.connection.on('error', () => {
    console.log('mongoose connection error:', mongoURI);
});
mongoose.connect(mongoURI); // connect to my database!!!

module.exports = mongoose; 

