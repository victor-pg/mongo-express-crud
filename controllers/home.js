const User = require('../models/userSchema');


module.exports.getUsers=(req,res)=>{
    User.find({},(err,users)=>{
        if(err){
            res.send(`error : ${err}`)
        }else{
            let data = users.map(user=>{
                return [user.name,user.age];
            })
            res.render('index',{
                users:data
            });
        }
    })
}