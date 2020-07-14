const express = require("express");
const registerRoute = express.Router();

let InitialSetup = require("../models/InitialSetup");


module.exports = (app) => {

    app.post('/api/initialSetup', async (req, res) => {
        const initialSetup = new InitialSetup(req.body)
        try {
            await initialSetup.save()
            res.status(201).send({ initialSetup })
        } catch (e) {
            res.status(400).send(e)
        }
    });

    app.get('/api/initialSetup/:userId', async (req, res) => {
        try {
            console.log("inside find setup");
            const userId = req.params.userId;
            console.log(userId);
            const setups = await InitialSetup.find({ userId });
            console.log(setups)
            res.status(200).send({ setups });
        } catch (e) {
            console.log(e)
            res.status(500).send(e);
        }
    });
}