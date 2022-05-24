const express = require('express');
const router = express.Router();

const booksController = {
  listBooks(req, res, next) {
    // TODO: hit up the db for info, until then using dummy data
    res.locals.books = [
      {
        title: 'An Imperial Affliction',
        author: 'Peter Van Houten',
        year: '2000'
      },
      {
        title: 'The World According to Axolotls',
        author: 'Yuve Noeidea',
        year: '2019'
      },
      {
        title: 'Race to the Finish',
        author: 'Willie Maekett',
        year: '1983'
      }
    ];

    return next();
  }
};

// GET all books
router.get('/', booksController.listBooks, (req, res) => {
  res
    .status(200)
    .json(res.locals.books);
});

// GET info on a single book
router.get('/:id', (req, res) => {

});

module.exports = router;