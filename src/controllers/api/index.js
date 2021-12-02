//import fs
const fs = require("fs");

//import path
const path = require("path");

const getNotes = (req, res) => {
  //read from json file
  const notesJSON = fs.readFileSync(
    path.join(__dirname, "../../../db/db.json"),
    "utf-8"
  );

  const notes = JSON.parse(notesJSON);

  console.log(notes);
  //send response of all notes
  res.json(notes);
};

const createNotes = (req, res) => {};

const deleteNote = (req, res) => {};

module.exports = { getNotes, createNotes, deleteNote };
