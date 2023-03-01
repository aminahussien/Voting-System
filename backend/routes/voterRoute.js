const express = require('express')
const router = express.Router()

const csvtojson = require('csvtojson')
//const { post } = require('./candidatesRoutes')
const Voter = require ('../models/voterModel')

const addVoters = async (req,res)=>{

    csvtojson()
        .fromFile("F:/voters_data_set.csv")
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

module.exports= router;
