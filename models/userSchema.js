const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model;

const UserSchema = new Schema({
    name:{
        type:String
    },
    age:{
        type:Number
    }
})

module.exports=model('User',UserSchema);