const express =  require('express')
const connectdb=require('./config/db')
const cors =require('cors')
const auth=require('./routes/auth')
require('dotenv').config()

const app = express()
app.use(cors())

connectdb()
app.get('/',(req,res)=>{
    res.send("home page")
})

app.use('/auth',auth)

app.listen(process.env.PORT,()=>{
    console.log(`sucessfull running in server ${process.env.PORT}`)
})