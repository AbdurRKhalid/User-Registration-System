const User = require("../Models/User");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
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
