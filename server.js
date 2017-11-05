//import required modules
const express = require('express'),
mongoose = require('mongoose'),
bodyParser = require('body-parser'),
cors = require('cors'),
path = require('path'),

//instantiate the express class/module/object
app = express();

//connect to mongodb
//mongoose.connect('mongodb://localhost:27017/sis_1'); --deprecated
const promise = mongoose.connect('mongodb://localhost/sis_1', {
    useMongoClient: true,
    /* other options */
});
promise.openUri('mongodb://localhost/sis_1');
//on connection
mongoose.connection.on('connected', ()=>{
    console.log('Connected to DB');
});
//on error
mongoose.connection.on('error', (err)=>{
    if(err){
        console.log('Error: ' + err);
    }    
});

//set port no
const port = 3000;

//adding middleware - use cors
app.use(cors());

//use body-parser
app.use(bodyParser.json());

//catch routes
const route = require('./routes/route');
app.use('/api', route);

//inform express of the port in use
app.listen(port, ()=>{
    console.log('Server started on port: ' + port);
});
