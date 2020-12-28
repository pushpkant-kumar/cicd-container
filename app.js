const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("My Name is Pushpkant Kumar! My Friend nam is Kanu& Anmol"));

app.get("/health", (req, res) => {
  res.status(200);
  res.send("healthy");
});

app.listen(3000, () => {
  console.log("App listening on port 3000!");
});
