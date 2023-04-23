const Voter = require ('../models/voterModel')

const mongoose = require('mongoose')

const express = require('express')
const router = express.Router()

const csvtojson = require('csvtojson')
const VoterLogin = require ('../models/voterLoginModel')

const jwt = require('jsonwebtoken')

// get all voters
const getVoters = async (req, res) => {
    const voters = await Voter.find({}).sort({createdAt: -1})
    res.status(200).json(voters)
    }

//SEND OTP 
const sendOTP = async(req,res)=>{
    //after this , it should checks if phunm and nid exists in voter document
      const {phNum,NID}= req.body
       //const phNum="01015578327";
       try{
           //generate otp
           const otp = randombetween(1000, 9999);
           console.log(phNum);
           //sendOTPSMS(req,res,otp,phNum);
           const login = await VoterLogin.create({phNum:phNum,otp:otp} )
           res.status(200).json({mobile:phNum,otp:otp,NID:NID})
       }catch(error){
           res.status(400).json({error:error.message})
       }
   
   }
   
   function randombetween(min, max) {  
       return Math.floor(
         Math.random() * (max - min) + min
       )
     }
   
     function sendOTPSMS(req,res,OTP,mobile) {  
       var https = require('follow-redirects').https;
       var fs = require('fs');
       
       var options = {
           'method': 'POST',
           'hostname': 'vjz8qe.api.infobip.com',
           'path': '/sms/2/text/advanced',
           'headers': {
               'Authorization': 'App cf99761ef76eafff1e2249270f76e448-cfc8b51e-4223-4155-b76b-03f59cbf065f',
               'Content-Type': 'application/json',
               'Accept': 'application/json'
           },
           'maxRedirects': 20
       };
       
       var req = https.request(options, function (res) {
           var chunks = [];
       
           res.on("data", function (chunk) {
               chunks.push(chunk);
           });
       
           res.on("end", function (chunk) {
               var body = Buffer.concat(chunks);
               console.log(body.toString());
           });
       
           res.on("error", function (error) {
               console.error(error);
           });
       });
       
       var postData = JSON.stringify({
           "messages": [
               {
                   "destinations": [
                       {
                           "to": "2"+mobile
                       }
                   ],
                   "from": "InfoSMS",
                   "text": "OTP Is :"+OTP
               }
           ]
       });
       
       req.write(postData);
       
       req.end();
   
   }

   //id is gonna be the path for payload
   const createToken = (_id)=> {
       return jwt.sign({_id},process.env.SECRET,{expiresIn:'3d'})
   }
   //authenticate otp
const authenticateOtp =async(req,res)=>{
    try{
       // const admin = await Admin.login(email,password)
        //create token
        const token = createToken("63aed9ab06b61bf3a43984f9")
        res.status(200).json({token}) 
    }catch(error){
        res.status(400).json({error:error.message})
    }
}


    module.exports ={
        getVoters,
        sendOTP,
        authenticateOtp
    }
