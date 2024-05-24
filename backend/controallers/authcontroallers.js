const Authmodel=require('../model/authmodel')
const {v4:uuidv4}=require('uuid')
const bcrypt=require('bcryptjs')
const nodemailer = require('nodemailer')
const updatemodel=require('../model/updatemodel')

exports.signup=async(req,res)=>{

    //input from user 
    const {email,password,name,cpassword}=req.body
    
    let user =await Authmodel.findOne({email})
    if(user){
        return res.status(400).json({message:" mail already registered"})
    }

    // to gendrate activation code 
    const activationcode=uuidv4()

    // to encrypt the passsword by bcryptjs
    const salt = await bcrypt.genSalt(10)
    const hashedpass=await bcrypt.hash(password,salt)
    const chashpass=await bcrypt.hash(cpassword,salt)
    
    // to save in db 
    user=new Authmodel({
        email,
        name,
        cpassword:chashpass,
        password:hashedpass,
        activationcode
    })

    await user.save()
    
    //to send email 
    const transport = nodemailer.createTransport({
        host:'smtp.gmail.com',
        port:587,
        auth:{
            user:process.env.EMAIL_USER,
            pass:process.env.EMAIL_PASS
        }
    })

    const activationlink=`http://localhost:3001/auth/activate/${activationcode}`

    const mailoptions ={
        from: process.env.EMAIL_USER,
        to:email,
        subject:"verify your mail account ",
        text:`please verify your email by clicking the link ${activationlink}`
    }

    transport.sendMail(mailoptions,(err)=>{
        if(err){
            res.status(400).json({message:"link cant be sent to your mail"})
        }
        else{
            res.status(200).json({message:"link send sucess"})
        }
    })

    res.status(200).json({message:"stored in db"})
}

exports.activate=async(req,res)=>{
    const {activationcode}=req.params
    let user = await Authmodel.findOne({activationcode})
    if(!user){
        return res.status(400).json({message:"not found"})
    }
    user.isActivated=true
    await user.save()
    res.status(200).json({message:"email verified sucessfully"})

}

exports.signin=async(req,res)=>{
    const{email,password}=req.body
    let user =await Authmodel.findOne({email})
    if(!user){
        return res.status(400).json({message:"user not found"})
    }
    const isMatching=await bcrypt.compare(password,user.password)
    if(!isMatching){
        return res.status(400).json({message:"incorrect password "})

    }
    if(!user.isActivated){
        return res.status(400).json({message:"activate your email"})
    }
    return res.status(200).json({message:"login sucessfull",user})
}

exports.userdetail=(req,res)=>{
  Authmodel.findById(req.params.id)
    .then(response=>res.send(response))
    .catch(err=>console.log(err))
//    res.status(200).json({message:"datafetch sucess",datapoda})
    }

    exports.updatedata=(req,res)=>{
      const update = updatemodel(req.body)
      update.save()
      res.status(200).json({message:"data stored successfully"})


    }