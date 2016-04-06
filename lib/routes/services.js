'use strict'

const express = require('express')
const router  = express.Router()

router.get('/manufacturing', (req, res, next) => {
  if (req.accepts('html')) {
      return res.render('services/manufacturing', {title: 'Express Boiler'})
  }

    return res.status(200)
        .json({
            status: 'Manufacturing',
            data: 'you\'ve reach the home route',
            message: 'This is the root of home'
        })
})


router.get('/installing', (req, res, next) => {
  if (req.accepts('html')) {
      return res.render('services/installing', {title: 'Express Boiler'})
  }

    return res.status(200)
        .json({
            status: 'Installing',
            data: 'you\'ve reach the home route',
            message: 'This is the root of home'
        })
})

router.get('/millwork', (req, res, next) => {
  if (req.accepts('html')) {
      return res.render('services/millwork', {title: 'Express Boiler'})
  }

    return res.status(200)
        .json({
            status: 'Millwork',
            data: 'you\'ve reach the home route',
            message: 'This is the root of home'
        })
})

router.get('/design', (req, res, next) => {
  if (req.accepts('html')) {
      return res.render('services/design', {title: 'Express Boiler'})
  }

    return res.status(200)
        .json({
            status: 'Design',
            data: 'you\'ve reach the home route',
            message: 'This is the root of home'
        })
})

router.get('/general-contracting', (req, res, next) => {
  if (req.accepts('html')) {
      return res.render('services/general-contracting', {title: 'Express Boiler'})
  }

    return res.status(200)
        .json({
            status: 'Design',
            data: 'you\'ve reach the home route',
            message: 'This is the root of home'
        })
})
module.exports = router
