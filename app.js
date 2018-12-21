const express = require('express');
const app = express ();
const bodyParser = require('body-parser');
const researchers = require ('./routes/researchers')
const species = require ('./routes/species')
const animals = require ('./routes/animals')
const habitats = require ('./routes/habitats')
const taggings = require('./routes/taggings')
const sightings = require ('./routes/sightings')

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.get('/',(req,res)=>{
  res.json({
    message: "this is the main page"
  })
})

app.use('/researchers',researchers)
app.use('/species',species)
app.use('/animals',animals)
app.use('/habitats',habitats)
app.use('/taggings',taggings)
app.use('/sightings',sightings)

app.get('*',(req,res)=>{
  res.json({
    message: "This route is not valid. Please use another route."
  })
})

app.listen(2000,()=>{
  console.log('server is running')
})
