const express = require('express');
const app = express();
const path = require('path');

const router = require('./routes/routes.js');

const PORT = 3000;

// Catch-all error handler
app.use('*', (req, res) => {
  // Sends 404 status and display a message
  res.status(404).send('Page not found.');
});

// Global error handler
app.use((err, req, res, next) => {
  // Defines default error object
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error has occurred' },
  };
  // Merges default error object with error received
  const errorObj = Object.assign({}, defaultErr, err);
  // Logs error message to console
  console.log(errorObj.log);
  // Sends the error response with status code and message
  return res.status(errorObj.status).json(errorObj.message);
});

// Listening on port
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
