//import express
const express = require("express");

//import routes
const routes = require("./routes");

const PORT = process.env.PORT || 3001;

const app = express();

app.listen(PORT, () => console.log("Server running on http://"));
