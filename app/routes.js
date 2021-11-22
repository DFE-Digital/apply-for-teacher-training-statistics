const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

module.exports = router

router.get('/subject-report', async (req, res) => {
  res.render('subject_report')
})

router.get('/:yyyy-:mm', async (req, res) => {
  res.render('month')
})
