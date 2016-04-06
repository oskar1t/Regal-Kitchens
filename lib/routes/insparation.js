'use strict'

const express = require('express')
const router  = express.Router()

router.get('/hardware', (req, res, next) => {
  if (req.accepts('html')) {
      return res.render('insparation/hardware', {title: 'Express Boiler'})
  }

    return res.status(200)
        .json({
            status: 'Manufacturing',
            data: 'you\'ve reach the home route',
            message: 'This is the root of home'
        })
})


router.get('/modern-idea', (req, res, next) => {
  if (req.accepts('html')) {
      return res.render('insparation/modern-idea', {title: 'Express Boiler'})
  }

    return res.status(200)
        .json({
            status: 'Installing',
            data: 'you\'ve reach the home route',
            message: 'This is the root of home'
        })
})

router.get('/traditional-idea', (req, res, next) => {
  if (req.accepts('html')) {
      return res.render('insparation/traditional-idea', {title: 'Express Boiler'})
  }

    return res.status(200)
        .json({
            status: 'Millwork',
            data: 'you\'ve reach the home route',
            message: 'This is the root of home'
        })
})

router.get('/think-about', (req, res, next) => {
  if (req.accepts('html')) {
      return res.render('insparation/think-about', {title: 'Express Boiler'})
  }

    return res.status(200)
        .json({
            status: 'Design',
            data: 'you\'ve reach the home route',
            message: 'This is the root of home'
        })
})

module.exports = router
