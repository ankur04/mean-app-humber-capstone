const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define collection and schema
let initialSetupSchema = new Schema(
  {
    organizationName: {
      type: String,
    },
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
      ref: "User",
      required: true,
    },
  },
  {
    collection: "InitialSetup",
  }
);

const InitialSetup = mongoose.model("InitialSetup", initialSetupSchema);

module.exports = InitialSetup;
