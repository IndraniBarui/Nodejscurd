const mongoose = require('mongoose');
const schema = mongoose.schema;

let usersSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required: true
    },
    country:{
        type:String,
        required:true
    }
},
    {
        collection:'users'
    }

);
module.exports= mongoose.model('usersSchema', usersSchema)