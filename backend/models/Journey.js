const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const InitialSetup = require("./InitialSetup");
const Phase = require("./Phase");
const WayPoint = require("./WayPoint");
const Activity = require("./Activity");
const Skill = require("./Skill");

let journeySchema = new Schema(
  {
    journeyId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    sector: {
      type: String,
      required: true,
    },
    phaseId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    waypointId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    activityId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    skillId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    exercise: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
    },
  },
  {
    collection: "journey",
  }
);

const Journey = mongoose.model("Journey", journeySchema);

module.exports = Journey;
