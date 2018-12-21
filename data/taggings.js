const db = require('./index')

function getAllTaggings (req,res){
  db.any('SELECT * FROM taggings')
  .then(result=>{
    res.json({
      status: 'success',
      message: 'these are ALL the taggings',
      result: result
    })
  }).catch(err=>{
    console.log(err)
  })
}

function getOneTaggings (req,res){
  const id = req.params.id;
  db.one('SELECT * FROM taggings WHERE id=$1',[id])
  .then(result=>{
    res.json({
      status: ' success ',
      message: ' you did the thing and here is ONE tagging',
      result: result
    })
  }).catch(err=>{
    console.log(err)
  })
}

function getAllTagsByR (req,res){
  const tagid = req.params.id;
  db.any(`SELECT * FROM taggings WHERE researcher_id=${tagid}`)
  .then(result =>{
    res.json({
      status: 'success',
      message: 'these are the taggings by ONE researcher',
      result: result
    })
  }).catch(err=>{
    console.log(err)
  })
}

function getAllTagsByA(req,res){
  const animalid = req.params.id;
  db.any(`SELECT * FROM taggings WHERE animal_id = ${animalid}`)
  .then(result=>{
    res.json({
      status: 'success',
      message: "these are the taggings by ONE animal",
      result: result
    })
  }).catch(err=>{
    console.log(err)
  })
}

function createATagging (req,res){
  db.none('INSERT INTO taggings (animal_id,researcher_id)VALUES(${animal_id},${researcher_id})',req.body)
  .then(result=>{
    res.json({
      status: 'success',
      message: 'you made a tagging'
    })
  }).catch(err=>{
    console.log(err)
  })
}

module.exports = {getAllTaggings,getOneTaggings,getAllTagsByR,getAllTagsByA,createATagging}
