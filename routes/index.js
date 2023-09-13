const express = require("express");
const routes = express.Router();
const { Role } = require("../models/RoleSchema");
const { User } = require("../models/UserSchema");

routes.post("/roles", async (req, res) => {
  try {
    const role = new Role(req.body);
    const existingRole = await Role.findOne({ role_name: role.role_name });
    if (existingRole) {
      return res.status(400).send({ message: "Role already exists" });
    }
    await role.save();
    res.json(role);
  } catch (error) {
    res.status(500).send({ message: "Error creating role" });
  }
});
routes.post("/users", async (req, res) => {
  try {
    const user = new User(req.body);
    const existingEmail = await User.findOne({ email: user.email });
    if (existingEmail) {
      return res.status(400).send({ message: "Email already exists" });
    }
    await user.save();
    res.send(user);
  } catch (error) {
    res.status(500).send({ message: "Error creating user" });
  }
});

routes.get("/users", async (req, res) => {
  const users = await User.find().populate("role");
  res.send(users);
});
routes.get("/roles", async (req, res) => {
  const roles = await Role.find();
  res.send(roles);
});

routes.get("/", (req, res) => {
  res.send("Admin Dashboard API");
});

routes.get("/email-domains", async (req, res) => {
  try {
    const emailDomains = await User.aggregate([
      {
        $group: {
          _id: { $substr: ["$email", { $indexOfBytes: ["$email", "@"] }, -1] },
          count: { $sum: 1 },
        },
      },
    ]);
    res.json(emailDomains);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

module.exports = { routes };
