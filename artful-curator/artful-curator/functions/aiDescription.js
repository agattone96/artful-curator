// filepath: /Users/allisongattone/Desktop/artcurator/artful-curator/functions/aiDescription.js
const functions = require('firebase-functions');

exports.generateAIDescription = functions.https.onCall(async (data, context) => {
  const { imageUrl } = data;
  return { description: "AI-generated description for: " + imageUrl };
});