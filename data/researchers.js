const db = require('./index')

function getAllResearchers (req,res){
  db.any('SELECT * FROM researchers')
  .then(result=>{
    res.json({
      status:'success',
      message: 'these are all the users',
      body: result
    })
  }).catch(err=>{
    console.log(err)
  })
}

function getOneResearcher (req,res){
  const researcherID = req.params.id;
  db.one('SELECT * FROM researchers WHERE id = $1',[researcherID])
  .then(result=>{
    res.json({
      status:'success',
      message: 'this is the one users',
      body: result
    })
  }).catch(err=>{
    console.log(err)
  })
}

function createAResearcher (req,res){
  const body = req.body
  db.none('INSERT INTO researchers (name,job_title) VALUES (${name},${job_title})',body)
  .then(results=>{
    res.json({
      status:'success',
      message: 'you have added a reseracher'
    })
  }).catch(err=>{
    console.log(err)
  })
}

function patchAResearcher (req,res){
  const id = req.params.id
  const body = req.body
  const name = body.name
  const job_title = body.job_title
  db.any(`UPDATE researchers SET name = ${name}, job_title = ${job_title} WHERE id = ${id} `)
  .then(results=>{
    res.json({
      status:'success',
      message: 'you have updated a researcher'
    })
  }).catch(err=>{
    console.log(err)
  })
}

function deleteAResearcher (req,res){
  const researcherID = req.params.id;
  db.none('DELETE FROM researchers WHERE id = $1',[researcherID])
  .then(result=>{
    res.json({
      status:'success',
      message: 'this is RESEARCHER HAS BEEN DELETED',
    })
  }).catch(err=>{
    console.log(err)
  })
}

module.exports={getAllResearchers,getOneResearcher,createAResearcher,patchAResearcher,deleteAResearcher}
