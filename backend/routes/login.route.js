const express = require("express");
const loginRoute = express.Router();

let User = require("../models/User");

module.exports = (app) => {
  app.post("/api/login", async (req, res) => {
    try {
      const user = await User.findByCredentials(
        req.body.email,
        req.body.password
      );
      res.send({ user });
    } catch (e) {
      res.status(404).send(e);
    }
  });
};

// loginRoute.route("/login").post((req, res, next) => {
//   User.findOne({ email: req.body.email }, (error, data) => {
//     if (error) {
//       return next(error);
//     } else if (data.length == 0) {
//       return next(new Error("Email not registered"));
//     } else {
//       console.log(data)
//       if (data.password == req.body.password) {
//         return res.json(data);
//       } else {
//         return next(new Error("Incorrect Email or Password"));
//       }
//     }
//   });
// });

// module.exports = loginRoute;
