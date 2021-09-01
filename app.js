require('dotenv').config()
const express = require('express')
const app = express()
// const port = 3000

// iife - for development purposes
// ;(async () => {
//   try {
//     await sequelize.authenticate()
//     console.log('Connection has been established successfully.')
//   } catch (error) {
//     console.error('Unable to connect to the database:', error)
//   }
//   User(sequelize)

//   sequelize.sync({ force: true })
// })()

// App configuration
// Routes
const auth = require('./controllers/auth')
app.use('/auth', auth)

const post = require('./controllers/post')
app.use('/post', post)

// sync DB *with all route needed models*
require('./db').sequelize.sync()

app.listen(process.env.PORT, () => {
  console.log(
    `[Server]: Example app listening at http://localhost:${process.env.PORT}`
  )
})
