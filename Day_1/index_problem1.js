const fs = require("fs");

const fileResponse = fs.readFileSync("./index.txt", "utf8");
const parsedFileData = fileResponse.split("\n");

const determineMass = data => {
  return (result = Math.floor(data / 3) - 2);
};

const result = parsedFileData.reduce((accum, curr) => {
  return (accum += determineMass(curr));
}, 0);

console.log("result: ", result);
