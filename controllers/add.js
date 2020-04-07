const User = require('../models/userSchema');

module.exports.addUser=(req,res)=>{
    const user = new User({
        name:req.body.name,
        age:req.body.age
    })
    user.save();   
    res.redirect('/');
}