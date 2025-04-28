// filepath: /Users/allisongattone/Desktop/artcurator/artful-curator/functions/retryProcessing.js
const functions = require('firebase-functions');

exports.retryProcessing = functions.https.onCall(async (data, context) => {
  return { status: "Retry started", id: data.id };
});