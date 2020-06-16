// Just send these files as they are and they don't need anything fancy to them

// Sets up the Express App
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000; // Heroku being used for deployment

// Sets up the Express app to handle app/data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Parsing the dbNotes into JSON data and creating that readFilesSync path along with adding a catch and throw for errors
// const dbNotes = JSON.parse(
//   fs.readFilesSync(
//     path.join(_dirname, "/db.json"),
//     (err,
//     (app) => {
//       if (err) throw err;
//     })
//   )
// );

// Might just be a readfile command and only one command

// function handleRequest() {
//    case "/index.html":
// }

// Routing
require("./routes/apiNotes")(app);
require("./routes/htmlRoutes")(app);

// app.get("/add", function (req, res) {
//   return `index.html`;
// });

// Posting the actual notes and takes in JSON input
app.post("/api/notes", function (req, res) {});

// Listen to this port here
app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT); // Server is running
});
