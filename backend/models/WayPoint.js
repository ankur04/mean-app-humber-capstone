const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Phase = require("./Phase");

let wayPointSchema = new Schema(
  {
    no: {
      type: String,
    },
    name: {
      type: String,
    },
    phase_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: Phase,
      required: true,
    },
  },
  {
    collection: "waypoints",
  }
);

const WayPoint = mongoose.model("WayPoint", wayPointSchema);

module.exports = WayPoint;
