const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const application = express();

application.use(express.urlencoded({ extended: true }));
application.use(express.json());

mongoose.connect(
  "mongodb://root:root@localhost:27017/?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

application.use(morgan("dev"));

module.exports = application;
