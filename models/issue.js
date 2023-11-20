/*
   This file defines the schema for an Issue in the database. Each issue has a title,description,author,
   and labels. All fields are required and are trimmed to remove any leading or trailing whitespace.
*/

const mongoose = require('mongoose');

const issueSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
    },
    description: {
      type: String,
      trim: true,
      required: true,
    },
    author: {
      type: String,
      trim: true,
      required: true,
    },
    labels: [
      {
        type: String,
        trim: true,
        required: true,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Issue = mongoose.model('Issue', issueSchema);

module.exports = Issue;