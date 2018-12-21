const db = require ('./index')

function getAllHabitats(req,res){
  db.any('SELECT * FROM habitats')
  .then(results=>{
    res.json({
      status:'success',
      message: 'theres are ALL the habitats',
      results: results
    })
  }).catch(err=>{
    console.log(err)
  })
}

function getOneHabitats (req,res){
  const ids = req.params.id;
  db.one('SELECT * FROM habitats WHERE id=$1',[ids])
  .then(results=>{
    res.json({
      status: 'success',
      message: 'this is ONE habitat',
      results: results
    })
  }).catch(err=>{
    console.log(err)
  })
}

function postOneHabitats (req,res){
  db.none('INSERT INTO habitats (category) VALUES (${category})',req.body)
  .then(results=>{
    res.json({
      status:'success',
      message: 'you created a habitat'
    })
  }).catch(err=>{
    console.log(err)
  })
}

module.exports = {getAllHabitats,getOneHabitats,postOneHabitats}
