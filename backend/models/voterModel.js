var mongoose  =  require('mongoose');
const Schema = mongoose.Schema


const csvSchema = new Schema({
    name:{
        type:String
    },
    nid:{
        type:String
    }
    
    });

module.exports = mongoose.model('Voter',csvSchema);