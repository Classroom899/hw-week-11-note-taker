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
};

app.get("/api/notes", function (req, res) {
  return res.json(dbNotes);
});

// POST request
app.post("api/notes.html", function (req, res) {
  console.log(req.body);
  let activeNote = req.body;
  let id = dbNotes.length; // Will need to figure out how to post to db.json
  activeNote.id = id + 1; // new note's id and adding one to it each time a new note is added
  dbNote.push(activeNote);
});

app.get("/notes", function (req, res) {
  res.sendFile(path.join(_dirname, "/public/assets/js/index.js"));
});
