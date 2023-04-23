const express = require('express')
const router = express.Router()

const csvtojson = require('csvtojson')
//const { post } = require('./candidatesRoutes')
const Voter = require ('../models/voterModel')
const { getVoters } = require('../controllers/votersController')
//const voterLoginModel = require('../models/voterLoginModel')
//const {sendOTP} = require('../controllers/voterLoginController')
const VoterLogin = require ('../models/voterLoginModel')
//const voter = require('../models/voterModel')
const mongoose = require('mongoose')

const addVoters = async (req,res)=>{

    csvtojson()
        .fromFile("F:/voterData.csv")
        .then(csvData =>{
            console.log(csvData);
            Voter.insertMany(csvData).then(function(){
                console.log("data inserted")
                res.json({success :'success'})
            }).catch(function (error){
                console.log(error)
            })
        })
}

//SEND OTP 
const sendOTP = async(req,res)=>{

    const {phNum} = req.body
    try{
        //generate otp
        const otp = 2628;
        //VoterLogin.insertMany(phNum,otp).the(function(){
        //    console.log("otp inserted")
        //})

        const login = await VoterLogin.create({phNum:phNum,otp:otp} )
        res.status(200).json({phNum:phNum,otp:otp})
    }catch(error){
        res.status(400).json({error:error.message})
    }

    module.exports ={
        sendOTP
    }


}












router.post('/addVoters',addVoters);
router.get('/getAllVoters',getVoters);
router.post('/sendOTP',sendOTP);

module.exports= router;
