const mongoose = require('mongoose');

// Connection URI
const uri = 'mongodb://localhost:27017/';

// Connect to MongoDB
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    // You can start interacting with the database here
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });