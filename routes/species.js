const express = require ('express')
const router = express.Router()
const db = require('../data/species')

router.get('/',db.getAllSpecies)
router.get('/:id',db.getOneSpecies)
router.post('/',db.postASpecies)

module.exports = router
