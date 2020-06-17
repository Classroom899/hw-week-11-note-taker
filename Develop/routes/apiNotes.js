// Routing
// require("./routes/apiNotes")(app);
// require("./routes/htmlRoutes")(app);

const fs = require("fs");
const noteData = require("../data/noteData");

// Routing
module.exports = function (app) {
  // app.get("/", function (req, res) {
  //   res.send("Hello");
  // });
  app.get("/api/notes", function (req, res) {
    res.json(noteData);
    let activeNote = fs.readFileSync("db.json");
    res.json(activeNote);
  });

  app.post("/api/notes", function (req, res) {
    noteData.push(req.body);
    res.json(noteData);
    console.log(noteData);
  });
  //   app.get("/index.html", function (req, res) {
  //     res.sendFile(path.join(_dirname, "/routes/htmlRoutes.js"));
  //   });
};

// app.get("/api/notes", function (req, res) {
//   return res.json(dbNotes);
// });

// app.get("/notes", function (req, res) {
//   res.sendFile(path.join(_dirname, "/public/assets/js/index.js"));
// });
