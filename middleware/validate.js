const validate = (req, res, next) => {
  try {
    const user = req.body;
    if (!user) {
      throw new Error("user info not found!");
    }
    for (const key in user) {
      if (key.toLowerCase() === "name") {
        next();
      }
    }

    throw new Error("User must have name!");
  } catch (err) {
    res.status(400).send("Error: " + err.message);
  }
};

module.exports = validate;
