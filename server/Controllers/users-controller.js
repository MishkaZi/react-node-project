const express = require('express');
const usersLogic = require('../Logic/users-logic');
const router = express.Router();
const axios = require('axios');

router.post('/register', (req, res) => {
  console.log(req.body);
  const {userName,password}= req.body;

  const response = axios.post('http://localhost:3001/db/register-user', {
    userName,
    password,
  });
});

router.post('/login', async (req, res) => {
  const userLoginDetails = req.body;
  let successfullLoginResponse = await usersLogic.Login(userLoginDetails);
  res.json(successfullLoginResponse);
});

module.exports = router;
