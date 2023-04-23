const VoterLogin = require ('../models/voterLoginModel')
//const voter = require('../models/voterModel')
const mongoose = require('mongoose')

//SEND OTP 
const sendOTP = async(req,res)=>{

    const {phNum} = req.body
    try{
        //generate otp
        const otp = 2628;
        VoterLogin.insertMany(phNum,otp).the(function(){
            console.log("otp inserted")
        })
        res.status(200).json({otp})
    }catch(error){
        res.status(400).json({error:error.message})
    }

    module.exports ={
        sendOTP
    }


}