const express = require('express')
const router = express.Router()
const db = require('../data/animals')

router.get('/',db.getAllAnimals)
router.get('/:id',db.getSingleAnimal)
router.post('/',db.postAnimal)
router.patch('/:id',db.patchAnimal)
router.delete('/:id',db.deleteAnimal)

module.exports = router
