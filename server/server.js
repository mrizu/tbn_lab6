const express = require('express');
const app = express();

app.get('/hello', (req, res) => {
  res.send({hello: 'hello'});
});

app.listen(9000, '0.0.0.0', () => {
  console.log('Application listening at 0.0.0.0:9000');
})
