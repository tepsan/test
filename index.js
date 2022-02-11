const express = require('express');
const cors = require('cors');
const app = express();
const helmet = require('helmet');

const data = require('./data');

app.use(cors());
app.use(helmet());

app.get('/', (req, res) => {
  res.json({ name: 'Hello World!' });
});

app.get('/users', (req, res) => {
  res.json({ data });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
