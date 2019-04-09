const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const axios = require('axios');
const querystring = require('querystring');
require('dotenv').config();

const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;

let accessToken = '';

app.get('/spotify-authorization', (req, res) => {
  axios({
    method: 'post',
    url: 'https://accounts.spotify.com/api/token',
    headers: {
      Authorization:
        'Basic ' +
        Buffer.from(`${client_id}:${client_secret}`).toString('base64')
    },
    data: querystring.stringify({
      grant_type: 'client_credentials'
    })
  })
    .then(response => {
      let accessToken = response.data.access_token;
      res.send(accessToken);
    })
    .catch(err => {
      res.send(`Error: ${err.response.data.error_description}`);
    });
});

app.get('/', (req, res) => res.send('Hello World from Express!'));

app.listen(port, () => console.log(`Express app listening on port ${port}!`));
