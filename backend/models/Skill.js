const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Activity = require("./Activity");

let skillSchema = new Schema(
  {
    activity_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: Activity,
      required: true,
    },
    name: {
      type: String,
    },
    sector: {
      type: Object,
    },
  },
  {
    collection: "skills",
  }
);

const Skill = mongoose.model("Skill", skillSchema);

module.exports = Skill;
