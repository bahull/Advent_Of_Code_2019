const fs = require("fs");

const fileResponse = fs.readFileSync("./index.txt", "utf8");
const parsedFileData = fileResponse.split("\n");
//TODO: Clean this while loop up!
const determineMass = data => {
  let fuel = 0;
  while (data >= 0) {
    data = Math.floor(data / 3) - 2;
    if (data > 0) {
      fuel += data;
    }
  }
  return fuel;
};

const result = parsedFileData.reduce((accum, curr) => {
  return (accum += determineMass(curr));
}, 0);

console.log({ result });
