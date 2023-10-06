const express = require('express');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('../db/dbConnect')
const {routes} = require('../routes/index.js');
require('dotenv').config();


const server = express();
connectDB();


server.use(express.json({ limit: '50mb' }));
server.use(express.urlencoded({ limit: '50mb', extended: true }));


server.use(bodyParser.json());
server.name = 'API';

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
} );
server.use(cors(
    {
      origin: 'http://localhost:5173/' | process.env.CLIENT_URL,
      methods:'GET, POST, PUT, DELETE, OPTIONS',
      credentials: true,
    }
  ))
  server.use(cookieSession(//se cambió de cookieSession a Session
    {
      name: 'session',
      keys: ['lama'],
      maxAge: 48 * 60 * 60 *10
    }
    ));

server.use('/', routes)

server.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
});

module.exports = {server};