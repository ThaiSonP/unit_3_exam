const db = require ('./index')

function getAllSightings(req,res){
  db.any('SELECT * FROM sightings')
  .then(result=>{
    res.json({
      status: 'success',
      message: 'these are ALL the sightings',
      body:result
    })
  }).catch(err=>{
    console.log(err)
  })
}

function getAllSightingsS (req,res){
  const id =req.params.id
  db.any(`SELECT * FROM sightings WHERE species_id = ${id}`,req.body)
  .then(result=>{
    res.json({
      status: 'success',
      message: 'these are the sightings for a single species',
      body: result
    })
  }).catch(err=>{
    console.log(err)
  })
}

function getAllSightingsR (req,res){
  const id =req.params.id
  db.any(`SELECT * FROM sightings WHERE researcher_id = ${id}`,req.body)
  .then(result=>{
    res.json({
      status: 'success',
      message: 'these are the sightings for a single researcher',
      body: result
    })
  }).catch(err=>{
    console.log(err)
  })
}

function getAllSightingsH (req,res){
  const id =req.params.id
  db.any(`SELECT * FROM sightings WHERE habitats_id = ${id}`,req.body)
  .then(result=>{
    res.json({
      status: 'success',
      message: 'these are the sightings for a single habitat',
      body: result
    })
  }).catch(err=>{
    console.log(err)
  })
}

function addNewSighting (req,res){
  db.none('INSERT INTO sightings (researcher_id,species_id,habitat_id) VALUES (${researcher_id},${species_id},${habitat_id})',req.body)
  .then(result=>{
    res.json({
      status: 'success',
      message: ' you have created a new sighting'
    })
  }).catch(err=>{
    console.log(err)
  })
}

function  deleteSingleSighting (req,res){
  const id = req.params.id
  db.none(`DELETE FROM sightings WHERE id=${id}`,req.body)
  .then(result=>{
    res.json({
      status: 'success',
      message: 'you have deleted this sighting'
    })
  }).catch(err=>{
    console.log(err)
  })
}

module.exports={getAllSightings,getAllSightingsS,getAllSightingsR,getAllSightingsH,addNewSighting,deleteSingleSighting}
