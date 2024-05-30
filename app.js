const express = require("express");

const app = express();

app.use(express.json());

const log = (req, res, next) => {
  console.log(req.body);
  console.log(`DATA: ${Date.now()}`);
  next();
};

app.use(log);

app.get("/", (req, res) => {
  res.send("<h1> Minha lista de tarefas :)<h1>");
});

app.get("/json", (req, res) => {
  res.json({ title: "Tarefa-X", done: true, date: "26/07/2007" });
});

app.listen(3000, () => {
  console.log(`Servidor iniciado`);
});
