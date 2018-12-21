const express = require('express')
const router = express.Router()
const db = require('../data/researchers')

router.get('/',db.getAllResearchers)
router.get('/:id',db.getOneResearcher)
router.post('/',db.createAResearcher)
router.patch('/:id',db.patchAResearcher)
router.delete('/:id',db.deleteAResearcher)

module.exports = router
