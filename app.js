const express = require("express");

const checklistRouter = require("./src/routes/checklist");
const taskRouter = require("./src/routes/task");

const rootRouter = require("./src/routes/index");

const methodOverride = require("method-override");
const mongoose = require("./config/database");
const path = require("path");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method", { methods: ["POST", "GET"] }));

app.set("views", path.join(__dirname, "src/views"));
app.set("view engine", "ejs");

app.use("/checklists", checklistRouter);
app.use("/checklists", taskRouter.checklistDependent);
app.use("/tasks", taskRouter.simple);

app.use("/", rootRouter);
app.use(express.static(path.join(__dirname, "public")));
app.listen(3000, () => {
  console.log(`Servidor iniciado`);
});
