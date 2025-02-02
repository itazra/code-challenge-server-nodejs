const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/temperature/:id', (req, res) => {
  fetch(
    `https://hasydbj5c4gpa2oozfpjpc677a0hxuob.lambda-url.ap-southeast-2.on.aws/sensor/${req.params.id}`
  )
    .then((response) => response.json())
    .then((response) => res.send(response));
});

module.exports = app;