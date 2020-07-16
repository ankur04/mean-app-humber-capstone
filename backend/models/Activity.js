const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const WayPoint = require("./WayPoint");

let activitySchema = new Schema(
  {
    no: {
      type: String,
    },
    desc: {
      type: String,
    },
    waypoint_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: WayPoint,
      required: true,
    },
  },
  {
    collection: "activities",
  }
);

const Activity = mongoose.model("Activity", activitySchema);

module.exports = Activity;
