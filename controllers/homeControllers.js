// Containsadditional home-related controller functios 
// (not implemented in the provided code).

// Implement home-related controller functions here

const Project = require('../models/project');
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