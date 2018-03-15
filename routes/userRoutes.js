const express = require('express')
const db = require('../models')

const router = express.Router()
const allowPath = ['firstName', 'lastName', 'sex']

// https://stackoverflow.com/a/26303473
router.post('/:field', async (req, res) => {
  const { value } = req.body
  const { id } = req.token

  if (!allowPath.some(e => e == req.params.field)) {
    res.status(400).json({ message: 'Wrong field name' })
    return
  }

  if (!value) {
    res.status(400).json({ message: 'value is empty' })
    return
  }

  try {
    await db.user.update(
      {
        [req.params.field]: value,
      },
      { where: { id } }
    )
  } catch ({ message }) {
    res.status(400).json({ message })
    return
  }

  res.json({ status: 'ok' })
})

module.exports = router
