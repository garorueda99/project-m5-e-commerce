"use strict";
const path = require("path");
const express = require("express");
const morgan = require("morgan");
const app = new express();
const PORT = 4000;

//THIS SEEMS TO BE  NOT LONGER REQUIERED
// const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.json()); https://medium.com/@mmajdanski/express-body-parser-and-why-may-not-need-it-335803cd048c

app
  .use(express.json())
  .use(morgan("dev"))

  //Check what is this for added by Andres Rueda
  .use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Methods",
      "OPTIONS, HEAD, GET, PUT, POST, DELETE"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  })
  //STATIC FOLDER = assets
  .use("/assets", express.static(path.join(__dirname, "assets")))
  .use(express.urlencoded({ extended: false }))

  //https://expressjs.com/en/starter/static-files.html
  .use("/", express.static(__dirname + "/"))

  // REST endpoints HERE
  //END POINTS GOES IN ROUTES FOLDER. if doubts ask Andres Rueda
  .use(require("./routes/bacon"));

app.listen(PORT, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.info(`==> 🌎  Listening on port ${PORT}.`);
  }
});
