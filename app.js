const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  console.log("Call received");
  res.json({ status: true });
});

app.get("/fail", (req, res) => {
  console.log("Fail call received");
  res.json({ status: false });
});

app.get("/final", (req, res) => {
  console.log("Final call received");
  res.json({ message: "Great, you finished the workshop!" });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
