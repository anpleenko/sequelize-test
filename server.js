require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const db = require('./models')
const app = express()

const { NODE_ENV, NODE_PORT } = process.env

app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  db.User.findAll().then(users => {
    res.send(users)
  })
})

app.post('/create_user', (req, res) => {
  const { firstName, lastName } = req.body

  db.User.create({
    firstName,
    lastName,
  }).then(user => {
    res.send({ message: 'success' })
  })
})

db.sequelize
  .authenticate()
  .then(() => {
    console.log('===> Connection has been established successfully.')

    app.listen(3000, () => {
      console.log(`===> NODE_ENV=${process.env.NODE_ENV}`)
      console.log(`===> App started on port ${NODE_PORT}, http://localhost:${NODE_PORT}/`)
    })
  })
  .catch(err => {
    console.error('===> Unable to connect to the database:', err)
  })
