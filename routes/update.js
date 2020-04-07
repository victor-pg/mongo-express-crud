const {Router} = require('express');
const router = Router();
const ctrlUpdate = require('../controllers/update')



router.get('/update',(req,res)=>{
    res.render('update')
});

router.post('/update',ctrlUpdate.updateUser);

module.exports = router;