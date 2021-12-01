//import path
const path = require("path");

const goToHome = (req, res) => {
  const filePath = path.join(__dirname, "../../../public/index.html");
  res.sendFile(filePath);
};

const goToNotes = (req, res) => {
  const filePath = path.join(__dirname, "../../../public/notes.html");
  console.log(filePath);
  res.sendFile(filePath);
};

module.exports = { goToHome, goToNotes };
