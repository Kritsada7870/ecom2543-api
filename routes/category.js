
const express = require ('express')
const router = express.Router()
const {create,list,renove} = require('../controllers/category')
const { authCheck, adminCheck } = require ('../middlewares/authCheck')


router.post('/category',authCheck, adminCheck ,create)
router.get('/category',list)
router.delete('/category/:id',authCheck, adminCheck ,renove)





module.exports = router