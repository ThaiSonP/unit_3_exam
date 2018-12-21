const express = require('express')
const router = express.Router()
const db = require('../data/sightings')



router.get ('/',db.getAllSightings)
router.get (`/species/:id`, db.getAllSightingsS)
router.get (`/researchers/:id`, db.getAllSightingsR)
router.get (`/habitats/:id`, db.getAllSightingsH)
router.post (`/`, db.addNewSighting)
router.delete (`/:id`,db.deleteSingleSighting)


module.exports=router
