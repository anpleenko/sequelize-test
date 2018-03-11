const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt-as-promised')
const db = require('../models')
const _ = require('lodash')

const router = express.Router()

router.post('/', async (req, res) => {
  const { password, email } = req.body

  const user = await db.user.findOne({ where: { email } })

  if (!user) {
    res.status(404).json({ message: 'User not found' })
    return
  }

  try {
    await bcrypt.compare(password, user.password)
  } catch (e) {
    res.status(404).json({ message: 'Bad credential' })
    return
  }

  const token = jwt.sign(_.omit(user.dataValues, ['password']), process.env.NODE_JWT_SECRET)
  res.json(token)
})

module.exports = router
