import express from "express";

const app = express();

app.get("/", (req, res) => {
  console.log(req.models);
  console.log("Listened");
  res.send("Hellow");
});

export default app;
