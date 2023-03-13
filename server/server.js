const path = require('path');
const express = require('express');
const app = express();
// const pg = require('pg');

// require('dotenv').config();

// // connect to the PostgresQL database
// pg.connect(process.env.DB, {useNewUrlParser: true, useUnifiedTopology: true });
// pg.connection.once('open', () => {
//   console.log(`Connected to ${pg.connection.name}`);
// })

app.use(express.json());

const apiRouter = require('./routes/apiRouter');

// Helper function for creating error objects with optional properties
function generateError(err = 'An  error ocurred', log = 'Express encountered a middleware error', status = 400) {
  return {
    message: { err },
    log,
    status
  };
}

app.use('/', express.static(path.resolve(__dirname, '../dist')));

//Use apiRouter for /api endpoint
app.use('/api', apiRouter);

app.get('/', (req, res) => res.status(200).sendFile(path.join(__dirname, '../index.html')));

// Route to test error handler, can be removed
app.get('/forcederror', (req, res, next) => {
  return next(generateError('This is a forced error'));
});

app.get('*', (req, res) => {
  return res.sendFile(path.resolve(__dirname, '../client/404.html'));
});

// GLOBAL ERROR HANDLER
app.use((err, req, res, next) => {

  // Default error object properties if missing
  const error = {
    status: 400,
    message: { err: 'An unknown error ocurred' },
    log: 'Express error handler caught unknown middleware error',

    ...err
  }

  // Log server message
  console.log(error.log);

  // Send response, with client error and status
  return res
    .status(error.status)
    .json(error.message);
});





const PORT = 4000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));