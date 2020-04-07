const User = require('../models/userSchema');


module.exports.removeUser=(req,res)=>{
    User.deleteOne({name:req.body.forDelete},(err)=>{
        if(err) console.log('error');
    });
    res.redirect('/');
}