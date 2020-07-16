const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let templateSchema = new Schema(
  {
    sector: {
      type: String,
    },
    phases: {
      type: Array,
    },
  },
  {
    collection: "templates",
  }
);

const Template = mongoose.model("Template", templateSchema);

module.exports = Template;
