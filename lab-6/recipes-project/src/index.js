require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const methodOverride = require('method-override')
const path = require("path");

const recipeRouter = require('./routes/recipe.route');
const { srcDir, rootDir } = require('./utils/path-helper')

const PORT = process.env.PORT;

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"))
app.use(methodOverride("_method"))

app.use(express.static(path.join(rootDir, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(srcDir, "views"));

app.get("/", (req, res) => res.render("index"));
app.use("/recipes", recipeRouter);

app.use((req, res, next) => {
  res.status(404).render("404");
});

app.listen(PORT, () => {
  console.log(`Server started (http://localhost:${PORT})!`);
});

// entry ---> route ----> controller ----> model
