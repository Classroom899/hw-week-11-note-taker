const path = require("path");

module.exports = function (app) {
  app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });
  // Catch element for this code in a way and need this if no matching route is found
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};
