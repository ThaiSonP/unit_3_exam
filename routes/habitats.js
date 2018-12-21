const express = require ('express');
const router = express.Router()
const db = require ('../data/habitats')

router.get('/',db.getAllHabitats)
router.get('/:id',db.getOneHabitats)
router.post('/',db.postOneHabitats)

module.exports = router
