const Journey = require("../models/Journey");

module.exports = (app) => {
  app.post("/api/journey", async (req, res) => {
    const journeyId = req.body.journeyId;

    const journey = await Journey.findOne({ journeyId });

    res.send(journey);
  });
};
