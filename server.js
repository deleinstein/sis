//import required modules
const express = require('express'),
mongoose = require('mongoose'),
bodyParser = require('body-parser'),
cors = require('cors'),
path = require('path'),

//instantiate the express class/module/object
app = express();

const DB = 'delcollege';
//connect to mongodb
//mongoose.connect('mongodb://localhost:27017/sis_1'); --deprecated
const promise = mongoose.connect(`mongodb://deleinstein:deleinstein@ds259085.mlab.com:59085/${DB}`, {
    useMongoClient: true,
    /* other options */
});
promise.openUri(`mongodb://deleinstein:deleinstein@ds259085.mlab.com:59085/${DB}`);
//on connection
mongoose.connection.on('connected', ()=>{
    console.log(`Connected to ${DB} DB`);
});
//on error
mongoose.connection.on('error', (err)=>{
    if(err){
        console.log('Error: ' + err);
    }    
});

//set port no
const port = process.env.PORT || 8080;

//adding middleware-use cors
app.use(cors());

//use body-parser
app.use(bodyParser.json());

//static files
app.use(express.static(path.join(__dirname, 'public')));

//catch routes
const route = require('./routes/route');
app.use('/api', route);

//inform express of the port in use
app.listen(port, ()=>{
    console.log(`Server started on port ${port}`);
});
