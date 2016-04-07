'use strict'

const express = require('express')
const router  = express.Router()

router.get('/', (req, res, next) => {
  if (req.accepts('html')) {
      return res.render('projects', {title: 'Express Boiler'})
  }

    return res.status(200)
        .json({
            status: 'Projects-3-grids',
            data: 'you\'ve reach the home route',
            message: 'This is the root of home'
        })
})

router.get('/library-brown', (req, res, next) => {
    if (req.accepts('html')) {
        return res.render('projects/library-brown', {title: 'Express Boiler'})
    }

      return res.status(200)
          .json({
              status: 'Library Brown',
              data: 'you\'ve reach the home route',
              message: 'This is the root of home'
          })
})

router.get('/library-white', (req, res, next) => {

    if (req.accepts('html')) {
        return res.render('projects/library-white', {title: 'Express Boiler'})
    }

      return res.status(200)
          .json({
              status: 'Project1',
              data: 'you\'ve reach the home route',
              message: 'This is the root of home'
          })
})

module.exports = router
