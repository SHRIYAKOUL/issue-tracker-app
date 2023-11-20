/*
  This file contains the home function that fetches all projects from the database, 
  sorts them by creation date, and renders them on the home page.
  If there’s an error, it logs the error message.
*/

const Project = require('../models/project');

// Function to render home page with all projects
module.exports.home = async function (req, res) {
  try {
    let projects = await Project.find({}).sort('-createdAt');
    return res.render('home', {
      title: 'Issue Tracker | Home',
      projects,
    });
  } catch(err) {
    console.log('Error', err);
    return;
  }
};