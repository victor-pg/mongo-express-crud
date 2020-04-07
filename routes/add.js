const {Router} = require('express');
const router = Router();
const ctrlAdd = require('../controllers/add')



router.get('/add',(req,res)=>{
    res.render('add')
});

router.post('/add',ctrlAdd.addUser);

module.exports = router;