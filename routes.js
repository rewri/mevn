'use strict'

const express = require('express')
const router  = express.Router()

router.get('/', (request, response) => {
    response.send({status: 'OK', message: 'Your request was successfully received'})
})

router.post('/', (request, response) => {
    response.send({status: 'OK', message: 'Your request was successfully received'})
})

router.put('/', (request, response) => {
    response.send({status: 'OK', message: 'Your request was successfully received'})
})

router.delete('/', (request, response) => {
    response.send({status: 'OK', message: 'Your request was successfully received'})
})

module.exports = router


