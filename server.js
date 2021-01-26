const express = require('express');
const connectDB = require('./config/db');

const app = express();

// connect database
connectDB();

app.get('/', (req, res) => res.send('API running !'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`The server has been started on port ${PORT} !`),
);