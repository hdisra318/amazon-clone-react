/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors')
const stripe = require('stripe')('sk_test_51P0xsjLY0KJvGmO7UJm9fiaCR30LrylZaBaOiWh9MFaIK2EE8r08Tp01mUr0HN7lIpK46d0m0XtV0DKovU0AVyBa00j2t8Vnns')


// API



// App configuration
const app = express();


// Middleware
app.use(cors({origin: true}));
app.use(express.json());


// API routes
app.get('/', (req, res) => {
    return res.status(200).send("Hola");
})

app.post('/payments/create', async (req, res) => {
    const total = req.query.total;

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd"
    });
    

    // OK
    res.status(201).send({
        clientSecret: paymentIntent.client_secret
    })
})



exports.api = functions.https.onRequest(app);