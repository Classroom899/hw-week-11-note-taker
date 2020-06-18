// Routing
// require("./routes/apiNotes")(app);
// require("./routes/htmlRoutes")(app);

const fs = require("fs");
const noteData = require("../data/noteData");
const dbNotes = require("../db/db.json");
console.log(dbNotes);

// Routing
module.exports = function (app) {
  // app.get("/", function (req, res) {
  //   res.send("Hello");
  // });
  app.get("/api/notes", function (req, res) {
    res.json(noteData);
    let activeNote = fs.readFileSync();
    res.json(activeNote);
  });

  app.post("/api/notes", function (req, res) {
    noteData.push(req.body);
    res.json(noteData);
    console.log(noteData);
  });

  app.get("/db/db.json", function (req, res) {
    path.join(__dirname, "../db/db.json");
    return res.json(dbNotes);
  });

  // Parsing the dbNotes into JSON data and creating that readFilesSync path along with adding a catch and throw for errors
  // const dbNotes = json.parse(
  //   fs.readFilesSync(
  //     path.join(__dirname, "/db.json"),
  //     (err,
  //     (app) => {
  //       if (err) throw err;
  //     })
  //   )
  // );
};
