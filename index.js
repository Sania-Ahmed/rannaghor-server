const express = require('express');
const app = express();
const port =process.env.PORT || 5000;
const cors = require('cors');
const chefs = require('./data/chefs.json');
const recipies = require('./data/recipies.json');

// adding cors
app.use(cors());

app.get('/', (req, res) => {
  res.send('RANNAGHOR COMING')
});
// loading all the chefs information 
app.get('/chefs', (req,res) => {
    res.send(chefs)
});
// getting individual chef info
app.get('/chefs/:id' , (req,res) => {
    const id = parseInt(req.params.id) ;
    const selectedChef = chefs.find(chef => chef.id === id)
    console.log(id)
    res.send(selectedChef)
});
// getting recipe according to chef_id

app.get('/recipies/:id', (req,res) => {
    const id = parseInt(req.params.id) ;
    const foundRecipies = recipies.filter(r => r.chef_id === id );
    res.send(foundRecipies)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})