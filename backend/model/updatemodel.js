const mongoose = require('mongoose')

const Updateschema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    number:{
        type:Number,
        required:true
    },
    city:{
        type:String,
        default:null
    },
    service:{
        type:String,
        default:null,
    },
    description:{
        type:String,
        default:null
    }
})

const updatemodel=mongoose.model('service',Updateschema)
module.exports=updatemodel