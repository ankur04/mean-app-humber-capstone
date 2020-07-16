const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("./User");

let phaseSchema = new Schema(
  {
    organization: {
      type: String,
    },
    environment: {
      type: String,
    },
    role: {
      type: String,
    },
    team: {
      type: String,
    },
    sector: {
      type: String,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: User,
      required: true,
    },
  },
  {
    collection: "phases",
  }
);

const Phase = mongoose.model("Phase", phaseSchema);

module.exports = Phase;
