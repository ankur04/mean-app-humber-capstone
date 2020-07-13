const express = require("express");
const registerRoute = express.Router();

let User = require("../models/User");

registerRoute.route("/register").post((req, res, next) => {
  User.find({ email: req.body.email }, (error, data) => {
    if (error) {
      return next(error);
    } else if (data.length > 0) {
      return next(new Error("Email already registered"));
    } else {
      User.create(req.body, (error, data) => {
        if (error) {
          return next(error);
        } else {
          res.json(data);
        }
      });
    }
  });
});

module.exports = registerRoute;
