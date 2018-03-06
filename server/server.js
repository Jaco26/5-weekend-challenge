// Express
const express = require('express');
const app = express();

// Body Parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


// ROUTER ROUTER ROUTER
const favoriteRouter = require('./routes/favorites-router');
app.use('/favorite', favoriteRouter);

// Static files
app.use(express.static('server/public'));

// Start server
const port = process.env.PORT || 5002;
app.listen(port, () => {
    console.log('Listening on port:', port);
})

