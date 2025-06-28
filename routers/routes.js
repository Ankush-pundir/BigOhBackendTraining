const express = require("express");
const router = express.Router();
const validate = require("../middleware/validate");
const users = [];

router.post("/User", validate, (req, res) => {
  users.push(req.body);
  res.send("user added successfully...");
});

router
  .route("/User/:user")
  .get((req, res) => {
    const userName = req.params.user;
    for (const user of users) {
      console.log(user);
      if (user.name === userName) {
        res.send(user);
      }
    }
    res.status(404).send("no user found...");
  })
  .delete((req, res) => {
    const userName = req.params.user;
    let i = users.findIndex((user) => user.name === userName);

    if (i === -1) {
      res.status(404).send("User Not Found");
    } else {
      users.splice(i, 1);
      res.send("user deleted Successfully...");
    }
  })
  .patch((req, res) => {
    const userName = req.params.user;
    let i = users.findIndex((user) => user.name === userName);
    if (i === -1) {
      res.status(404).send("User Not Found");
    } else {
      users[i] = { ...users[i], ...req.body };
      res.send("user updated Successfully");
    }
  });

router.get("/allUsers", (req, res) => {
  res.send(users);
});

module.exports = router;
