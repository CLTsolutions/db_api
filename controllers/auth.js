const express = require('express')
const router = express.Router()
const { User } = require('../models/User')

router.get('/', (req, res) => {
  res.send('Hello World!')
})

router.post('/create/:name', async (req, res) => {
  let message
  try {
    const user = await User.create({
      username: req.params.name,
    })
    message = { message: 'User created', user }
  } catch (err) {
    console.log(err)
    message = 'Failed to create user.'
  }
  // objs cant pass in res.send
  res.send(JSON.stringify(message))
})

module.exports = router
