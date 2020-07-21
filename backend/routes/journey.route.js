const Journey = require("../models/Journey");

module.exports = (app) => {
  app.post("/api/journey", async (req, res) => {
    const journeyId = req.body.journeyId;

    const journey = await Journey.findOne({ journeyId });

    res.send(journey);
  });

  app.put("/api/update-journey", async (req, res) => {
    const updatedJourney = await Journey.findByIdAndUpdate(
      req.body._id,
      req.body,
      { new: true }
    );

    console.log(updatedJourney);
    res.send(updatedJourney);
  });
};
