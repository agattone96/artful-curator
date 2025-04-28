// filepath: /Users/allisongattone/Desktop/artcurator/artful-curator/functions/stripeWebhook.js
const functions = require('firebase-functions');

exports.stripeWebhook = functions.https.onRequest((req, res) => {
  res.status(200).send("Received Stripe event");
});