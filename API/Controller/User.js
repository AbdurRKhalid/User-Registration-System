const User = require("../Models/User");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");
module.exports.signUp = function signUpUser(req, res, next) {
  User.find({ email: req.body.email })
    .exec()
    .then((result) => {
      if (res.length > 0) {
        res.status(404).json({
          message: "The User with This Email Address is Already Present!",
        });
      } else {
        bcrypt.hash(req.body.password, 2, (error, hash) => {
          if (error) {
            res.status(404).json({
              message: "Error Occcurred While Encrypting the Password!",
            });
          } else {
            const newUser = new User({
              _id: mongoose.Types.ObjectId(),
              firstName: req.body.firstName,
              lastName: req.body.lastName,
              email: req.body.email,
              password: hash,
            });
            newUser
              .save()
              .then((result) => {
                res.status(200).json({
                  message: "The User Signed Up Successfully!",
                });
              })
              .catch((error) => {
                res.status(404).json({
                  message: "The User could not Signed Up!",
                });
              });
          }
        });
      }
    })
    .catch((error) => {
      res.status(404).json({
        message: "Error Occurred!",
        error: error,
      });
    });
};

module.exports.login = function login(req, res, next) {
  User.findOne({ email: req.body.email })
    .exec()
    .then((result) => {
      bcrypt.compare(req.body.password, result.password, (error, result) => {
        if (error) {
          res.status(404).json({
            message: "Passowrd is Incorrect!",
          });
        } else {
          const token = jsonwebtoken.sign(
            { email: result.email },
            "RANDOMAPIKEY",
            { expiresIn: "1h" }
          );
          res.status(200).json({
            message: "User LoggedIn Successfully!",
            token: token,
          });
        }
      });
    })
    .catch((error) => {
      res.status(404).json({
        message: "Error Occurred While Logging!",
        error: error,
      });
    });
};
