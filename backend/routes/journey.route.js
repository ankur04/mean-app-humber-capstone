const Journey = require("../models/Journey");
const Template = require("../models/Template");

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
    res.send(updatedJourney);
  });

  app.post("/api/journey-percentage", async (req, res) => {
    const journeyId = req.body.journeyId;
    const journey = await Journey.findOne({ journeyId });
    const templates = await Template.find();

    const template = getTemplate(journey, templates);
    const phase = getPhase(journey, template.phases);
    const waypointIndex = getWaypointIndex(journey, template.phases);
    const totalWaypoints = getTotalWaypoints(template);
    console.log(waypointIndex);
    console.log(totalWaypoints);
    let journeyPercentage = 0;
    if (waypointIndex + 1 == totalWaypoints) {
      const waypoint = getWaypoint(journey, phase.waypoints);
      const activity = getActivity(journey, waypoint.activities);
      const skill = getSkill(journey, activity.skills);
      const percentage = getPercentage(journey, skill.exercises_data.exercises);
      if (percentage == 100) {
        journeyPercentage = 100;
      } else {
        journeyPercentage = Math.round(
          ((totalWaypoints - 1) * 100) / totalWaypoints
        );
      }
    } else {
      journeyPercentage = Math.round((waypointIndex * 100) / totalWaypoints);
    }

    res.send({ journeyPercentage });
  });
};

const getTemplate = (data, templates) =>
  templates.find((template) => template.sector == data.sector);

const getPhase = (data, phases) =>
  phases.find((phase) => phase.id == data.phaseId);

const getWaypoint = (data, waypoints) =>
  waypoints.find((waypoint) => waypoint.id == data.waypointId);

const getActivity = (data, activities) =>
  activities.find((activity) => activity.id == data.activityId);

const getSkill = (data, skills) =>
  skills.find((skill) => skill.id == data.skillId);

const getExerciseIndex = (data, exercises) =>
  exercises.findIndex((exercise) => exercise.id == data.exercise.id);

const getPercentage = (data, exercises) => {
  let index = getExerciseIndex(data, exercises);
  if (
    data.exercise.video &&
    (data.exercise.canvas.show || data.exercise.canvas.download) &&
    (data.exercise.document.show || data.exercise.document.download)
  ) {
    index++;
  }
  return Math.round((index / exercises.length) * 100);
};

const getWaypointIndex = (data, phases) => {
  let index = 0;
  for (let i = 0; i < phases.length; i++) {
    const phase = phases[i];
    for (let j = 0; j < phase.waypoints.length; j++) {
      const waypoint = phase.waypoints[j];
      if (waypoint.id == data.waypointId) {
        return index;
      }
      index++;
    }
  }
  return index;
};

const getTotalWaypoints = (template) => {
  let totalWaypoints = 0;
  template.phases.forEach((phase) => {
    totalWaypoints += phase.waypoints.length;
  });
  return totalWaypoints;
};
