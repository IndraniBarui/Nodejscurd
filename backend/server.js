const bodyParser = require('body-parser');
const createError = require('http-errors');
let express = require('express');
path = require('path');
mongoose=require('mongoose')
cors = require('cors');
// bodyParser = require('body-parser')
dbconfig=require('./db/database')

mongoose.Promise = global.Promise;
mongoose.connect(dbconfig.db,{
    useNewUrlParser:true
}).then(()=>{
    console.log('database connected')
},
error=>{
    console.log('database could not be connected: ' + error)

});

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:false
}));
app.use(cors());
const userRoute = require('./routes/userRoutes');
app.use('/endpoint', userRoute);
const port = process.env.PORT || 9090;
const server = app.listen(port,()=>{
    console.log('port connected:'+ port)
})

app.use((req,res,next)=>{
    next(createError(404));
});

app.get('/', (req,res)=>{
    res.send('invalid endpoint')
});

app.use(function(err, req,res,next){
    if(!err.statusCode)err.statusCode=400;
    res.status(err.statusCode).send(err.message);
})
