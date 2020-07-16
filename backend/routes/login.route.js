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
