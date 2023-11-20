/*
  This file is responsible for establishing a connection to your MongoDB database.
  It uses the mongoose library to connect to MongoDB Atlas cluster using the provided URI. 
  If the connection is successful, it logs ‘MongoDB Connected…’ to the console.
  If there’s an error, it logs the error message.
*/
const mongoose = require('mongoose');
// URI for MongoDB Atlas cluster
const uri = "mongodb+srv://shriyakoul17:KoulShriya2001@issue-teacker-cluster.tixy1xg.mongodb.net/?retryWrites=true&w=majority";
// Connect to MongoDB
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected...')) // Log on successful connection
  .catch(err => console.log(err)); // Log on connection error

  // Export mongoose instance
module.exports = mongoose;
