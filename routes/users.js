const express = require('express');
const router = express.Router();

const User = require('../models/User')

/* GET users listing. */
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    res.json({user})
  } catch(err){
    res.json({err})
  }
});

router.post('/', async (req, res) => {
  try {
    const user = await User.create(req.body)
    // to send it back onto postman
    res.json({user})
    // console.log(user)
  } catch(err){
    res.json({err})
  }
});

router.put('/', (req, res) => {
  return res.json({data: 'Received a PUT HTTP method user'});
});

router.delete('/', (req, res) => {
  return res.json({data: 'Received a DELETE HTTP method user'});
});

router.post('/login', async(req, res) => {
  try{
    const foundUser = await User.findOne({ username: req.body.username })
    res.json({
      user: foundUser,
      success: true
    })
  } catch(err){
    res.json({err})
  }
})


module.exports = router;
