const express = require('express');
const router = express.Router();




router.post('/', (req, res) => {
  const body = req.body;
  res.json(body);
  console.log(body);
});

module.exports = router;