const User = require('../models/userSchema');

module.exports.updateUser=(req,res)=>{
    User.updateOne({name:req.body.initial},{name:req.body.forUpdate},(err)=>{
        if(err) console.log('error');
    })
    res.redirect('/');
}