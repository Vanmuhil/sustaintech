const mongoose=require('mongoose')

const connectdb=()=>{
    mongoose.connect(process.env.DB_URL)
    mongoose.connection.on('connected',()=>{
       console.log("mongodb connection sucessfull")
    })
}
module.exports=connectdb