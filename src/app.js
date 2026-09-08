const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("DevOps Case Study Application");
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok"
  });
});

app.get("/status", (req, res) => {
  res.status(200).json({
    application: "devops-case-study",
    status: "running"
  });
});

module.exports = app;