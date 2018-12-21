const db = require ('./index')

function getAllSpecies(req,res){
  db.any('SELECT * from species')
  .then(result=>{
    res.json({
      status: 'success',
      message: 'these are all the species',
      body: result
    })
  }).catch(err=>{
    console.log(err)
  })
}

function getOneSpecies(req,res){
  const id = req.params.id;
  db.one('SELECT * from species WHERE id=$1',[id])
  .then(result=>{
    res.json({
      status: 'success',
      message: 'this is one species',
      body: result
    })
  }).catch(err=>{
    console.log(err)
  })
}

function postASpecies (req,res){
  const body = req.body
  db.none('INSERT INTO species (name, is_mammal) values (${name},${is_mammal})',body)
  .then(result=>{
    res.json({
      status: 'success',
      message: 'species created'
    })
  }).catch(err=>{
    console.log(err)
  })
}

module.exports= { getAllSpecies,getOneSpecies,postASpecies}
