const db = require("../models/index.js");
const User = db.models.User;
const Op = db.Sequelize.Op;
const bcrypt = require("bcrypt");

// hash password
const saltRounds = 10;
// Create and Save a new User

exports.create = (req, res) => {
  // Validate request
  if (!req.body.username) {
    res.status(400).send({
      message: "User name can not be empty!",
    });
    return;
  }
  if (!req.body.password) {
    res.status(400).send({
      message: "Password can not be empty!",
    });
    return;
  }
  // hash password
  bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
    // Store hash in your password DB.
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the User.",
      });
    }
    const user = {
      username: req.body.username,
      password: hash,
    };
    // Save User in the database
    User.create(user)
      .then((data) => {
        res.status(201).send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the User.",
        });
      });
  });
};

exports.login = (req, res) => {
  // Validate request
  if (!req.body.username) {
    res.status(400).send({
      message: "User name can not be empty!",
    });
    return;
  }
  if (!req.body.password) {
    res.status(400).send({
      message: "Password can not be empty!",
    });
    return;
  }
  // find user
  User.findOne({
    where: {
      username: req.body.username,
    },
  })
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: "User Not found.",
        });
      }
      // compare password
      bcrypt.compare(req.body.password, user.password, function (err, result) {
        if (err) {
          return res.status(401).send({
            message: "Unauthorized",
          });
        }
        if (result) {
          return res.status(200).send({
            message: "Login successful",
          });
        }
        return res.status(401).send({
          message: "Unauthorized",
        });
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving User with username=" + req.body.username,
      });
    });
}
