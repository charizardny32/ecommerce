const express = require('express');
const router = express.Router();
const db = require('../db/projectModel');

const booksController = {
  listBooks(req, res, next) {
    const query = `SELECT * FROM product`;
    db.query(query)
      .then((data) => {
        res.locals.books = [...data.rows];
        return next();
      }).catch(error => next(error));
  },
  
  async oneBook(req, res, next) {
    const { product_id } = req.params; 
    try{
    const query = `SELECT * FROM product WHERE product_id = $1`;
    const response = await db.query(query, [product_id]);
    res.locals.oneBook = response.rows[0];
      return next()
    }
    catch(err){
      return next({
        log: `Error in booksController.oneBook: ${err}`,
        message: {err: `Error occurred in booksController.oneBook`}
      })
    }
  },

  async addBook (req, res, next) {
    const { book_title, author, year, price, description } = req.body;
    const { product_id } = req.params;
    try{
      const query = `INSERT INTO product (product_id, book_title, author, year, price, description)
                      VALUES ($1, $2, $3, $4, $5, $6)
                      RETURNING *`
      const params = [ product_id, book_title, author, year, price, description ];
      const response = await db.query(query, params);
      res.locals.newBook = response;
      return next();
    }
    catch(err){
      console.log(err);
      return next({
        log: `booksController.addBook: ERROR ${err}`,
        message: {err: `Error occurred in booksController.addBook`}
      })
    }
  }

};

// GET all books
router.get('/', booksController.listBooks, (req, res) => {
  return res
    .status(200)
    .json(res.locals.books);
});

// GET info on a single book
router.get('/:product_id', booksController.oneBook, (req, res) => {
  console.log('woohoo');
  res.status(200).json(res.locals.oneBook);
});

//POST a book
router.post('/:product_id', booksController.addBook, (req, res) => {
  console.log('yay');
  res.status(200).json(res.locals.newBook);
})

module.exports = router;