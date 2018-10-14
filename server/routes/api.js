const express = require('express');
const router = express.Router();
const axios = require('axios');
const fetch = require('node-fetch');
const API = 'https://jsonplaceholder.typicode.com';

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

// Get all posts
router.get('/posts', (req, res) => {

  fetch('http://twint:80/')
    .then((response) => response.json())
  .then((data) => {console.log('data: ', data); res.send(data);})
  .catch((error) => console.log('error: ', error));

  // Get posts from the mock api
  // This should ideally be replaced with a service that connects to MongoDB
  // axios.get(`${API}/posts`)
  //   .then(posts => {
  //     res.status(200).json(posts.data);
  //   })
  //   .catch(error => {
  //     res.status(500).send(error)
  //   });
});

router.get('/tweets', async (req, res, next) => {
  try {
    const response = await fetch('http://twint:80');
    console.log('after fetch');
    const json = await response.json();
    res.send(json);
  } catch (e) {
    //this will eventually be handled by your error handling middleware
    next(e)
  }
})


module.exports = router;
