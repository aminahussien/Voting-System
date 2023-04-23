const express = require('express')
const router = express.Router()

const csvtojson = require('csvtojson')
//const { post } = require('./candidatesRoutes')
const Voter = require ('../models/voterModel')
const { getVoters } = require('../controllers/votersController')
const { sendOTP } = require('../controllers/votersController')
const { authenticateOtp } = require('../controllers/votersController')


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








router.post('/addVoters',addVoters);
router.get('/getAllVoters',getVoters);
router.post('/sendOTP',sendOTP);
router.post('/authenticateOTP',authenticateOtp);
module.exports= router;
