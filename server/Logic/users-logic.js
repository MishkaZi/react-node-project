const { response } = require('express');
const jwt = require('jsonwebtoken');

const secret= 'hello there';

async function Login(user) {

//   let userLoginData = await userDao.login(login);
//   const token = jwt.sign({ sub: userName }, config.secret);
//   response.send({ token: token, userType: 'CUSTOMER' });

  const token = jwt.sign({ sub: user.userName }, secret);
  console.log(token);
//   response.send({ token: token});
}

module.exports = {
  Login,
};