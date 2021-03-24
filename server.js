
const express = require('express');
const path = require('path');
require('dotenv').config();
const index = require('./routes');

const app = express();
app.set('view engine', 'ejs');


//middleware
app.use(express.static(path.join(__dirname, 'public')))
app.use('/', index);


// the 404 apge 
app.use((request, response) => {
  response.status(404);
  response.sendFile(__dirname + '/pulbic/404.html');
});

//server-port 
const port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log(`Listening on port: ${PORT}`)
});
