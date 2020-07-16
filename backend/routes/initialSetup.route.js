let InitialSetup = require("../models/InitialSetup");
let Journey = require("../models/Journey");
let Template = require("../models/Template");

module.exports = (app) => {
  app.post("/api/initialSetup", async (req, res) => {
    const initialSetup = new InitialSetup(req.body);
    try {
      await initialSetup.save();
      startJourney(initialSetup);
      res.status(201).send({ initialSetup });
    } catch (e) {
      res.status(400).send(e);
    }
  });

  app.get("/api/initialSetup/:userId", async (req, res) => {
    try {
      const userId = req.params.userId;
      const setups = await InitialSetup.find({ userId });
      res.status(200).send({ setups });
    } catch (e) {
      res.status(500).send(e);
    }
  });

  app.delete("/api/initialSetup/:setupId", async (req, res) => {
    try {
      const setupId = req.params.setupId;
      const setup = await InitialSetup.findOne({ _id: setupId });
      if (setup) {
        await setup.delete({ _id: setupId });
      } else {
        res.status(404).send();
      }
      res.status(200).send({ setup });
    } catch (e) {
      res.status(500).send(e);
    }
  });
};

const startJourney = async (initialSetup) => {
  const template = await Template.findOne({ sector: initialSetup.sector });
  const { phaseId, waypointId, activityId, skillId } = getFirstJouneyData(
    template
  );
  const journey = new Journey({
    journeyId: initialSetup._id,
    sector: initialSetup.sector,
    phaseId,
    waypointId,
    activityId,
    skillId,
  });
  journey.save();
};

const getFirstJouneyData = (template) => {
  const phase1 = template.phases[0];
  const waypoint1 = phase1.waypoints[0];
  const activity1 = waypoint1.activities[0];
  const skill1 = activity1.skills[0];
  return {
    phaseId: phase1.id,
    waypointId: waypoint1.id,
    activityId: activity1.id,
    skillId: skill1.id,
  };
};
