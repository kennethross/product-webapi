var bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const config = require('../config');

const users = [
  {
    username: 'john',
    password: 'password123admin',
    role: 'admin'
  }, {
    username: 'anna',
    password: 'password123member',
    role: 'member'
  }
];

module.exports = function (app) {
  app.use(bodyParser.json());

  app.post('/api/login', function (req, res) {
 // Read username and password from request body
 const { username, password } = req.body;

 // Filter user from the users array by username and password
 const user = users.find(u => { return u.username === username && u.password === password });

 if (user) {
     // Generate an access token
     const accessToken = jwt.sign({ username: user.username,  role: user.role }, config.getSecretAccessToken());

     res.json({
         accessToken
     });
 } else {
     res.send('Username or password incorrect');
 }
  })
}