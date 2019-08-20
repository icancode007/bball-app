const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

//Connect to remote mongo Server
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {userNewUrlParser: true, useCreateIndex: true});

const connection = mongoose.connection(
  connection.once('open', () => {
    console.log("Mongo Db connection established");
  })
)

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`Server listening in: ${port}`);
});
