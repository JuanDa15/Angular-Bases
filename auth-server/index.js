const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./db/config');
require('dotenv').config();

const app = express();

// db
dbConnection();


app.use( express.static('public'))
// Cors
app.use( cors() );

// body lecture
app.use( express.json() );

// Routes
app.use('/api/auth', require('./routes/auth')); 

app.listen( process.env.PORT ,()=>{
  console.log('xd');
});