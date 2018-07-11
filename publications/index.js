'use strict'

const express = require('express')
const router = express.Router()
const PublicationController = require('../../controllers/PublicationController')
const auth = require('../auth')

router.get('/', auth, PublicationController.getAll)
router.get('/:_id', auth, PublicationController.getById)

router.post('/', auth, PublicationController.create)

router.put('/:_id', auth, PublicationController.update)
router.put('/stars/:_id', auth, PublicationController.updateStars)
router.put('/report/:_id', auth, PublicationController.updateReport)

router.delete('/:_id', auth, PublicationController.remove)

module.exports = router
