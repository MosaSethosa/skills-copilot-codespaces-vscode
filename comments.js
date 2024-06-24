// Create web server
const express = require('express');
const app = express();
const port = 3000;
const comments = require('./comments');

app.get('/comments', (req, res) => {
  res.send(comments.getComments());
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});