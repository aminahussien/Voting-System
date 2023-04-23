const Voter = require ('../models/voterModel')

const mongoose = require('mongoose')

// get all voters
const getVoters = async (req, res) => {
    const voters = await Voter.find({}).sort({createdAt: -1})
    res.status(200).json(voters)
    }


    module.exports ={
        getVoters
    }