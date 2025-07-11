const express = require("express");
const route = require("./routers/routes");
const validate = require("./middleware/validate");
const app = express();

const port = 4000;
const users = [];

// app.get("/", (req, res) => {
//   res.send("first Api server");
// });

app.use(express.json());


// app.post("/user", (req, res) => {
//   users.push(req.body);
//   console.log(users);
//   res.send("user added successfully");
// });

// app.get("/allUser", (req, res) => {
//   res.send(users);
// });

app.use("/", route);

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
