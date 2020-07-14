const express = require("express");
const registerRoute = express.Router();

let User = require("../models/User");


module.exports = (app) => {

  app.post('/api/register', async (req, res) => {
    const user = new User(req.body)
    try {
      await user.save()
      res.status(201).send({ user })
    } catch (e) {
      res.status(400).send(e)
    }
  });
}


// registerRoute.route("/register").post((req, res, next) => {
//   User.find({ email: req.body.email }, (error, data) => {
//     if (error) {
//       return next(error);
//     } else if (data.length > 0) {
//       return next(new Error("Email already registered"));
//     } else {
//       User.create(req.body, (error, data) => {
//         if (error) {
//           return next(error);
//         } else {
//           res.json(data);
//         }
//       });
//     }
//   });
// });

// module.exports = registerRoute;
