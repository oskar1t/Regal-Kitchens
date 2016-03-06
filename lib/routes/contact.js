'use strict'

const express = require('express')
const router  = express.Router()

router.get('/', (req, res, next) => {
  if (req.accepts('html')) {
      return res.render('contact', {title: 'Express Boiler'})
  }

    return res.status(200)
        .json({
            status: 'Contact',
            data: 'you\'ve reach the home route',
            message: 'This is the root of home'
        })
})



module.exports = router
