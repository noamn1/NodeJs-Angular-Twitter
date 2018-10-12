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

  fetch('http://127.0.0.1:5000')
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
router.get('/tweets', (req, res) => {

  fetch('http://127.0.0.1:5000')
    .then((response) => response.json())
  .then((data) => {console.log('data: ', data); res.send(data);})
  .catch((error) => console.log('error: ', error));
});

module.exports = router;
