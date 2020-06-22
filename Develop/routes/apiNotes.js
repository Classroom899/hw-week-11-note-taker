// Routing
// require("./routes/apiNotes")(app);
// require("./routes/htmlRoutes")(app);

const fs = require("fs");
const noteData = require("../data/noteData");
const dbNotes = require("../db/db.json");
console.log(dbNotes);

// Routing
module.exports = function (app) {
  app.get("/api/notes", function (req, res) {
    let activeNotes = fs.readFileSync("./db/db.json");
    console.log(activeNotes);
    res.json(JSON.parse(activeNotes)); // JSON array had to be returned
  });

  app.post("/api/notes", function (req, res) {
    const body = req.body;
    body.id = 1;
    let activeNotes = fs.readFileSync("./db/db.json");
    activeNotes = JSON.parse(activeNotes);
    req.body.id = activeNotes[activeNotes.length - 1].id + 1;
    activeNotes.push(req.body);
    fs.writeFile("./db/db.json", JSON.stringify(activeNotes), function () {
      res.json(req.body);
    });

    // noteData.push(req.body);
    // res.json(noteData);
    // data.id = id++;
    // while (noteData.includes(id)) {
    //   id++;
    // }
  });

  app.get("/db/db.json", function (req, res) {
    path.join(__dirname, "../db/db.json");
    fs.writeFile("db/db.json", dbNotes, getNotes()); // where I was last on
    return res.json(dbNotes);
  });

  app.delete("/api/notes/:id", function (req, res) {
    console.log(req.params);
    // const body = req.body;
    // body.id = 1;
    let activeNotes = fs.readFileSync("./db/db.json");
    activeNotes = JSON.parse(activeNotes);
    activeNotes[activeNotes.length - 1].id + 1;
    let removeIndex = -1;
    for (let i = 0; i < activeNotes.length; i++) {
      const element = activeNotes[i];
      if (element.id === Number(req.params.id)) {
        // Making this a number
        removeIndex = i;
      }
    }
    if (removeIndex > -1) {
      activeNotes.splice(removeIndex, 1); // Remove one item of the array at the removeIndex
    }
    fs.writeFile("./db/db.json", JSON.stringify(activeNotes), function () {
      res.json(activeNotes);
    });
    // noteData.splice(id);

    // Use splice or filter way
  });
};
