const express = require("express");
const app = express();
const path = require("path");

const UserRoutes = require("./routes/users.cjs");
const download = require("./components/download.cjs");
const routes = require("./components/routes.cjs");
const renderJson = require("./components/renderJson.cjs");

app.use(express.urlencoded({extended: true}))
app.use("/static",express.static("public"))
// Set view engine
app.set("view engine", "ejs");

// Require the JSON file
const jsonData = require("./data.json");

function defineRoutes(app) {
  routes(app, "/", "index", "world");
  routes(app, "/home", "home");
  renderJson(app, "/api/data", jsonData); // Use the JSON data from the external file
  download(app, "/download", "./views/download.ejs");
  routes(app, "*", "404"); // Wildcard route should be defined last

}
app.use("/users", UserRoutes);
defineRoutes(app);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
