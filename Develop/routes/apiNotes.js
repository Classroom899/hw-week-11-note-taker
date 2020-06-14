// Routing
// require("./routes/apiNotes")(app);
// require("./routes/htmlRoutes")(app);

const noteData = require("../public/assets/js/index");

// Routing
module.exports = function (app) {
  app.get("/notes.html", function (req, res) {
    res.json(noteData);
  });
};

// app.get("/notes", function (req, res) {
//     res.sendFile(path.join(_direname, "views", "notes.html"));
//   });
