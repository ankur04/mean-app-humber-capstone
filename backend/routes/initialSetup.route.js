const express = require("express");
const registerRoute = express.Router();

let InitialSetup = require("../models/InitialSetup");
const { set } = require("core-js/fn/dict");


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
            const userId = req.params.userId;
            const setups = await InitialSetup.find({ userId });
            res.status(200).send({ setups });
        } catch (e) {
            res.status(500).send(e);
        }
    });

    app.delete('/api/initialSetup/:setupId', async (req, res) => {
        try {
            const setupId = req.params.setupId;
            const setup = await InitialSetup.findOne({ _id: setupId });
            if (setup) {
                await setup.delete({ _id: setupId });
            } else {
                res.status(404).send();
            }
            res.status(200).send({ setup });
        } catch (e) {
            res.status(500).send(e);
        }
    });
}