const {Router} = require('express');
const router = Router();
const ctrlRemove = require('../controllers/remove')


router.get('/delete',(req,res)=>{
    res.render('delete');
})
router.post('/delete',ctrlRemove.removeUser);

module.exports = router;