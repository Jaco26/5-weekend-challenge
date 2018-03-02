// Express
const express = require('express');
const app = express();

// Body Parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// Mongoose
const mongoose = require('mongoose');
const databaseUrl = 'mongodb://localhost:27017/SWAPIfavs';
mongoose.connection.on('connected', () => {
    console.log('mongoose connected to:', databaseUrl);
}); 
mongoose.connection.on('error', () => {
    console.log('mongoose connection error:', databaseUrl);
});
mongoose.connect(databaseUrl); // connect to my database!!!

// ROUTER ROUTER ROUTER


// Static files
app.use(express.static('server/public'));

// Start server
const port = process.env.PORT || 5002;
app.listen(port, () => {
    console.log('Listening on port:', port);
})

