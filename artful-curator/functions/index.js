const functions = require('firebase-functions');

// Example function
exports.helloWorld = functions.https.onRequest((req, res) => {
  res.send('Hello, World!');
});
