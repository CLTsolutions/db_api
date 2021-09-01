const express = require('express')
const router = express.Router()
const { Post } = require('../models/Post')

router.get('/', (req, res) => {
  res.send('Hello from the posts route!')
})

router.post('/create/:content', async (req, res) => {
  let message
  try {
    const post = await Post.create({
      content: req.params.content,
    })
    message = { message: 'Post made!', data: post }
  } catch (err) {
    message = 'Failed to create post.'
    // console.warn(err)
    console.log(err)
  }
  // objs cant pass in res.send
  res.send(JSON.stringify(message))
})

module.exports = router
