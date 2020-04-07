const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model;

const TaskSchema = new Schema({
    name:{
        type:String
    }
})

module.exports=model('Task',TaskSchema);