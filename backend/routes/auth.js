const express=require('express')
const {signup,activate,signin,userdetail,updatedata}=require('../controallers/authcontroallers')
const router = express.Router()
const bodyparser=require('body-parser')
router.use(bodyparser.json())
router.post('/signup',signup)
router.get('/activate/:activationcode',activate)
router.post('/signin',signin)
router.get('/usersdetail/:id',userdetail)
router.post('/service',updatedata)

module.exports=router