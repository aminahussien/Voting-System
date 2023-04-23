var mongoose  =  require('mongoose');
const Schema = mongoose.Schema

const VoterLogin = new Schema({
    phNum:{
        type:String
    },
    otp:{
        type:String
    },
    
    }, { timestamps:true }
    );
    

    
    


module.exports = mongoose.model('VoterLogin',VoterLogin);