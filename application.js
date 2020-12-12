const express = require("express");
const morgan = require("morgan");

const application = express();

application.use(express.urlencoded({ extended: true }));
application.use(express.json());

application.use(morgan("dev"));

module.exports = application;
