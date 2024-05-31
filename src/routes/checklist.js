const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("Hello");
  res.send();
});

router.post("/", (req, res) => {
  console.log(req.body);
  res.status(200).send(req.body);
});

router.get("/:id", (req, res) => {
  console.log(`ID:${req.params.id}`);
  res.status(200).send(`ID:${req.params.id}`);
});

router.put("/:id", (req, res) => {
  console.log(`PUT ID:${req.params.id}`);
  res.status(200).send(req.params.id);
});

router.delete("/:id", (req, res) => {
  console.log(`DELETE ID:${req.params.id}`);
  res.status(200).send(req.params.id);
});

module.exports = router;
