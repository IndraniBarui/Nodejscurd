const express = require('express')
const app = express();
const usersExpresstRoute = express.Router();
let usersSchema = require('../model/users.model');

usersExpresstRoute.route('/').get((req,res)=>{
    usersSchema.find((error,data)=>{
        if(error){
            return next(error)
        }else{
            res.json(data)
        }

     })
})
//////get coin by id
usersExpresstRoute.route('/user/:id').get((req,res)=>{
    usersSchema.findById(req.params.id,(error,data)=>{
        if(error){
            return next(error)
        }else{
            res.json(data)
        }
    })
})

//////add coins (post method)
usersExpresstRoute.route('/add-users').post((req,res,next)=>{
    usersSchema.create(req.body,(error,data)=>{
        if(error){
            return next(error)
        }else{
            res.json(data)
        }
    })
})

//////delete coins(delete method)

usersExpresstRoute.route('/del-users/:id').delete((req,res)=>{
    usersSchema.findByIdAndRemove(req.params.id,(error,data)=>{
        if(error){
            return next(error)
        }else{
            res.status(200).json({
                msg:data
            })
        }
    })
})

//////update coins by id

usersExpresstRoute.route('/update-users/:id').put((req,res)=>{
    usersSchema.findByIdAndUpdate(req.params.id,{
         $set:req.body
    },(error,data)=>{
        if(error){
            return next(error)
        }else{
            res.json(data)
            console.log("Deleted sucessfully")
        }
    })
})





 
module.exports = usersExpresstRoute