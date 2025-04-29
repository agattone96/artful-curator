const functions = require('firebase-functions');

exports.exportCsv = functions.https.onCall(async (data, context) => {
  const { records } = data;
  const header = Object.keys(records[0]).join(",");
  const rows = records.map(rec => Object.values(rec).join(","));
  const csv = [header, ...rows].join("\n");
  return { csv };
});