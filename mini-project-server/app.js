const express = require('express');
const cors = require('cors');
const server = express();
server.use(cors({ origin: 'http://localhost:3000' }));
server.use(express.json());
const usersController = require('./Controllers/users-controller');

server.use('/users', usersController);

server.listen(3001, () => {
  console.log('Running on 3001');
});
