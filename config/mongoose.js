// ./config/mongoose.js
/*const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/issue_tracker', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

module.exports = mongoose;
*/
const mongoose = require('mongoose');

// replace the "<password>" with your actual password
const uri = "mongodb+srv://shriyakoul17:KoulShriya2001@issue-teacker-cluster.tixy1xg.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

module.exports = mongoose;
