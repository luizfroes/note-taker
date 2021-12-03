//import path
const path = require("path");

//import utils
const { getNotesFromFile, writeToFile } = require("../../utils");

const getNotes = (req, res) => {
  const notes = getNotesFromFile();

  //send response of all notes
  res.json(notes);
};

const createNotes = (req, res) => {
  console.log(req.query);

  res.json("createNotes");
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
  const newNotes = notes.filter((note) => {
    return note.id !== id;
  });

  writeToFile(
    path.join(__dirname, "../../../db/db.json"),
    JSON.stringify(newNotes)
  );

  console.log(notes);
  console.log(id);
  console.log(newNotes);

  return res.json(newNotes);
};

module.exports = { getNotes, createNotes, deleteNote };
