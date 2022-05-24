const express = require('express');
const router = express.Router();
const booksRouter = require('./booksRouter.js');
const usersRouter = require('./usersRouter');

router.use('/books', booksRouter);
router.use('/users', usersRouter);

router.get('/', (req, res, next) => {
  return next({ message: { err: 'null' }});
});

module.exports = router;