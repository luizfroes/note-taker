//import fs
const fs = require("fs");

//import path
const path = require("path");

// write to file
const writeToFile = (filePath, data) => {
  try {
    fs.writeFileSync(filePath, data);
  } catch (error) {
    console.log(error.message);
  }
};

const getNotesFromFile = () => {
  //read from json file
  const notesJSON = fs.readFileSync(
    path.join(__dirname, "../db/db.json"),
    "utf-8"
  );

  const notes = JSON.parse(notesJSON);

  return notes;
};

module.exports = { writeToFile, getNotesFromFile };
