const express = require('express');
const bodyParser = require('body-parser');
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');
const cors = require('cors');
const PORT = "8080";

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
	useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});


// create express app
const app = express();

// app.use(cors())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
  });
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

// Configuring the database



// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to Livwize Smart Solutions"});
});

require('./app/routes/todo.routes.js')(app)
// app.use(signup_model);

// listen for requests
app.listen(PORT, () => {
    console.log("Server is listening on port"+PORT);
});


//Web Socket Start..............

