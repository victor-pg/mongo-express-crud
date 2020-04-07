const {Router} = require('express');
const router = Router();
const ctrlUsers = require('../controllers/home')



router.get('/',ctrlUsers.getUsers);

module.exports = router;