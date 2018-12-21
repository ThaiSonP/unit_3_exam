const express = require('express')
const router = express.Router()
const db = require('../data/taggings')

router.get('/',db.getAllTaggings)
router.get('/:id',db.getOneTaggings)
router.get('/researchers/:id',db.getAllTagsByR)
router.get('/animals/:id',db.getAllTagsByA)
router.post('/',db.createATagging)


module.exports = router
