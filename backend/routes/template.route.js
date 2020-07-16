let Template = require("../models/Template");

module.exports = (app) => {
  app.get("/api/template", async (req, res) => {
    try {
      const templates = await Template.find();
      res.send(templates);
    } catch (e) {
      res.status(404).send(e);
    }
  });
};
