'use strict';
const path = require('path');
const express = require('express');
const morgan = require('morgan'); // log requests
const app = new express();
const PORT = 4000;

//THIS SEEMS TO BE  NOT LONGER REQUIERED
// app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.json()); https://medium.com/@mmajdanski/express-body-parser-and-why-may-not-need-it-335803cd048c

app
  //Middleware functions
  .use(express.json())
  .use(morgan('dev'))
  .use(function (req, res, next) {
    res.header(
      'Access-Control-Allow-Methods',
      //A comma-separated list of HTTP methods that are allowed
      'OPTIONS, HEAD, GET, PUT, POST, DELETE'
    );
    res.header(
      'Access-Control-Allow-Headers',
      //A comma-separated list of the custom headers that are allowed to be sent
      //https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Headers
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
  })
  //STATIC FOLDER = assets
  .use('/assets', express.static(path.join(__dirname, 'assets')))
  .use(express.urlencoded({ extended: false }))
  //https://expressjs.com/en/starter/static-files.html
  .use('/', express.static(__dirname + '/'))

  //ENDPOINTS
  .use(require('./routes/profile'))
  .use(require('./routes/items'))
  .use(require('./routes/seller'));

app.listen(PORT, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.info(`==> 🌎  Listening on port ${PORT}.`);
  }
});
