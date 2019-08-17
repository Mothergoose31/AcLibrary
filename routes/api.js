const express = require('express');
const router = express.Router();
const axios = require('axios');
  

router.get('/', (req, res) => {
  res.json({type: 'success', message: 'You access the protected API route'});
});
router.get('/search', (req, res) => {
  console.log(req.query.title);
  axios.get(`https://core.ac.uk/api-v2/search/${req.query.title}?page=1&pageSize=25&apiKey=J2s9CjBn8StlwfNmp5R4dDzWIEuoVexv`).then(response => {
    console.log(response.data.data)
    res.json(response.data.data)
  }).catch( err =>{
    console.log("got error",err);
  })
});



module.exports = router;