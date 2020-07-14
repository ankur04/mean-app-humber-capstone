const mongoose = require("mongoose");
const validator = require('validator')
const bcrypt = require('bcryptjs')
const Schema = mongoose.Schema;

// Define collection and schema
let initialSetupSchema = new Schema(
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
            ref: "User",
            required: true,
        },
    },
    {
        collection: "InitialSetup",
    }
);


const User = mongoose.model("InitialSetup", initialSetupSchema);

module.exports = User;
