const db = require ('./index')

function getAllAnimals (req,res){
  db.any('select * from animals')
  .then(result=>{
    res.json({
      status:'success',
      message: 'these are all the animals',
      body: result
    })
  }).catch(err=>{
    console.log(err)
  })
}

function getSingleAnimal (req,res){
  const id = req.params.id;
  db.one('SELECT * FROM animals WHERE id = $1',[id])
  .then(results=>{
    res.json({
    status:'success',
    message: 'this is ONE animal',
    body: results
  })
}).catch(err=>{
  console.log(err)
})
}

function postAnimal (req,res){
  db.none('INSERT INTO animals (species_id,nickname)values(${species_id},${nickname})',req.body)
  .then(results=>{
    res.json({
      status: 'success',
      message: 'animal has been created'
    })
  }).catch(err=>{
    console.log(err)
  })
}

function patchAnimal (req,res){
  const id = req.params.id
  const body = req.body
  const species_id = body.species_id
  const nickname = body.nickname
  db.any(`UPDATE animals SET species_id = ${species_id}, nickname=${nickname} WHERE id =${id} `,body)
  .then(results=>{
    res.json({
      status:'success',
      message: 'you have updated an animal'
    })
  }).catch(err=>{
    console.log(err)
  })
}

function deleteAnimal(req,res){
  const id = req.params.id;
  db.none('DELETE from animals where id =$1',[id])
  .then(results=>{
    res.json({
      status:'success',
      message: 'this animal is now extinct'
    })
  }).catch(err=>{
    console.log(err)
  })
}

module.exports= {getAllAnimals,getSingleAnimal,patchAnimal,postAnimal,deleteAnimal}
