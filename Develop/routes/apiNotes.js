// Routing
// require("./routes/apiNotes")(app);
// require("./routes/htmlRoutes")(app);

const noteData = require("notes.html");
const starData = require("index.html");

// Routing
module.exports = function (app) {
  app.get("/notes.html", function (req, res) {
    res.json(noteData);
  });
  app.get("/notes.html", function (req, res) {
    res.sendFile(path.join(_dirname, "/routes/apiNotes.js"));
  });
  app.get("/index.html", function (req, res) {
    res.json(starData);
  });
  app.get("/index.html", function (req, res) {
    res.sendFile(path.join(_dirname, "/routes/htmlRoutes.js"));
  });

  // POST request
  app.post("api/notes.html", function (req, res) {
    console.log(req.body);
    let newNote = req.body;
    let id = dbNotes.length;
  });
};

app.get("/notes", function (req, res) {
  res.sendFile(path.join(_dirname, "/public/assets/js/index.js"));
});
