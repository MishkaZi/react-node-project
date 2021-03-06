const express = require('express');
const cors = require('cors');

const usersController = require('./Controllers/users-controller');
const dbController = require('./Controllers/db-controller');

const server = express();

server.use(cors({ origin: 'http://localhost:3000' }));
server.use(express.json());

server.use('/db', dbController);
server.use('/users', usersController);

server.listen(3001, () => {
  console.log('Running on 3001');
});
