const express = require('express');
const mongoose = require('mongoose');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const app = express();
app.get('/', (req, res) => res.send('Welcome to the App'));
app.use('/auth/google', require('./routes/authRoutes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT);
