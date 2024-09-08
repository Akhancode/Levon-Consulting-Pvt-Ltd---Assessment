const fs = require("fs");


function readJson(jsonFilePath) {
  const rawData = fs.readFileSync(jsonFilePath);
  return JSON.parse(rawData);
}

function writeJson(dataToStore ,jsonFilePath ) {
  const data = JSON.stringify(dataToStore, null, 2);
  fs.writeFileSync(jsonFilePath, data);
}

module.exports = { readJson, writeJson };
