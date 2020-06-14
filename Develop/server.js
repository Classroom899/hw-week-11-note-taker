// Just send these files as they are and they don't need anything fancy to them

// Sets up the Express App
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000; // Heroku being used for deployment

// Sets up the Express app to handle app/data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// function handleRequest() {
//    case "/index.html":
// }

// Routing
// require("./routes/apiNotes")(app);
// require("./routes/htmlRoutes")(app);

app.get("/add", function (req, res) {
  return `index.html`;
});

// Posting the actual notes and takes in JSON input
app.post("/api/notes", function (req, res) {});

// Listen to this port here
app.listen(PORT, function () {});

// Start our server
// server.listen(PORT, function () {
// Callback triggered?
//   console.log("Server is listening on:  +" + PORT);
// });
