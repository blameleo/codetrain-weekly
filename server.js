const express = require("express");
const app = express();

app.get("/home", (req, res) => {
  res.send("welcome to the homepage");
});

app.post("/login", (req, res) => {
  res.send("welcome to the login page");
});

app.put("/onboard", (req, res) => {
  res.send("welcome to the onboarding page");
});

app.delete("/user:id", (req, res) => {
  res.send("user deleted");
});

app.listen(5000, () => {
  console.log("server is running on port 5000");
});
