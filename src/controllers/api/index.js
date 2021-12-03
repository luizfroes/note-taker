//import path
const path = require("path");

//import uuid
const { v4: uuidv4 } = require("uuid");

//import utils
const { getNotesFromFile, writeToFile } = require("../../utils");

const getNotes = (req, res) => {
  const notes = getNotesFromFile();

  //send response of all notes
  res.json(notes);
};

const createNotes = (req, res) => {
  const payload = req.body;

  //validate if my object contains all the following keys: title and text
  const validKeys = ["title", "text"];

  const isValid = validKeys.every((key) => Object.keys(payload).includes(key));

  if (isValid) {
    const newNote = {
      id: uuidv4(),
      ...payload,
    };

    const notes = getNotesFromFile();

    notes.push(newNote);

    writeToFile(
      path.join(__dirname, "../../../db/db.json"),
      JSON.stringify(notes)
    );

    res.json(newNote);
  }

  return res.status(400).json({
    message: "In order to save a note you need to add a Title and a Text.",
  });
};

const deleteNote = (req, res) => {
  const { id } = req.params;

  const notes = getNotesFromFile();

  const note = notes.find((note) => note.id === id);

  if (!note) {
    return res.status(404).json({
      message: `There is no note with the ID: ${id}`,
    });
  }
  const newNotes = notes.filter((note) => note.id !== id);

  writeToFile(
    path.join(__dirname, "../../../db/db.json"),
    JSON.stringify(newNotes)
  );

  return res.json(newNotes);
};

module.exports = { getNotes, createNotes, deleteNote };
