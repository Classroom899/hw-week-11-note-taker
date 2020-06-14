// Just send these files as they are and they don't need anything fancy to them

// Sets up the Express App
const express = require("express");
const app = express();
const PORT = 3000;

// Sets up the Express app to handle app parsing
app.use(express.urlencoded);

function handleRequest() {
  //    case "/index.html":
}

// Basic route tht sends the user first to the AJAX Page // Change this for the file we want to send
app.get("/notes", function (req, res) {
  res.sendFile(path.join(_direname, "views", "add.html"));
});

app.get("/add", function (req, res) {
  return `index.html`;
});

// Posting the actual notes and takes in JSON input
app.post("/api/notes", function (req, res) {});

// listen to this port here
app.listen.PORT;

// Start our server
server.listen(PORT, function () {
  // Callback triggered?
  console.log("Server is listening on:  +" + PORT);
});
