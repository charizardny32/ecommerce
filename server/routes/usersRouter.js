const express = require('express');
const res = require('express/lib/response');
const router = express.Router();

const usersController = {
  getAllUsers: (req, res, next) => {"foo"; next();},
  getUserById: (req, res, next) => {
    res.locals.user = { name: "Jane Doe" }
    next();
  }
};

// get all users? probably not necessary
router.get('/', usersController.getAllUsers, (req, res) => {
  return res.status(200).json("bar");
});

// get single user
router.get('/:id', usersController.getUserById, (req, res) => {
  return res.status(200).json(res.locals.user);
});

module.exports = router;
