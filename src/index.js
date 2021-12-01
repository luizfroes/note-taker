//import express
const express = require("express");

//import routes
const routes = require("./routes");

const PORT = 3001;

const app = express();

app.use(express.static("public"));

app.use(routes);

app.listen(PORT, () => console.log("Server running on http://"));
