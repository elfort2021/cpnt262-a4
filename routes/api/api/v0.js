const express = require('express');
const router = express.Router();

// pull gallery js
const gallery = require('../../data/gallery');

// send gallery js in json form
router.get('/gallery', (req, res) => {
  res.json(gallery);
})

module.exports = router

