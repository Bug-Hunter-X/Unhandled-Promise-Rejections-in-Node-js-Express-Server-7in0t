const express = require('express');
const app = express();
app.get('/', (req, res) => {
  setTimeout(() => {
    res.send('Hello World!');
  }, 5000);
}).catch(err => {
  console.error('Error handling request:', err);
  res.status(500).send('Server Error');
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});