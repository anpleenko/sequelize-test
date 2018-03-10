const express = require('express')
const db = require('../models')
const router = express.Router()

router.post('/', async (req, res, next) => {
  const { firstName, lastName, email } = req.body

  db.user
    .create({
      firstName,
      lastName,
      email,
    })
    .then(user => {
      res.send({ message: 'success' })
    })
    .catch(({ message }) => {
      res.status(500).json({ message })
    })
})

module.exports = router
