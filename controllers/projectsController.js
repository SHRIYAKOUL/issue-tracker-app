/*
  This file contains functions for creating a project, displaying a project’s details, and creating
  an issue for a project. Each function handles database operations and redirects or renders views
  accordingly. If there’s an error, it redirects back to the previous page.
*/

const Project = require('../models/project');
const Issue = require('../models/issue');
const { findById } = require('../models/project');

// Function to cretae a project for the user
module.exports.create = async function(req,res){
  try{
    Project.create({
      name:req.body.name,
      description:req.body.description,
      author:req.body.author,
    });
    return res.redirect('back');
  }catch(err){
    console.log(err);
    return res.redirect('back');
  }
};
 
// Function to diplay project details
module.exports.project = async function(req,res){
  try{
    let project = await Project.findById(req.params.id).populate({
      path:'issues',   
    });
    if(project){
      return res.render('project_page',{
        title:'Project Page',
        project,
      });
    }
    return res.redirect('back');
  }catch(err){
    console.log(err);
    return res.redirect('back');
  }
};

// Function to create an issue for a project

module.exports.createIssue = async function(req,res) {
  try{
    let project = await Project.findById(req.params.id);
    if(project) {
      let issue = await Issue.create({
        title :req.body.title,
        description: req.body.description,
        labels:req.body.labels,
        author:req.body.author,
      });
      project.issues.push(issue);
      
      if(!(typeof req.body.labels === 'string')){
        for(let label of req.body.labels){
          let isPresent = project.labels.find((obj) => ob == label);
          if(!isPresent) {
            project.labels.push(label);
          }
        }
      }else{
        let isPresent = project.labels.find((obj) => obj == req.body.labels);
        if(!isPresent){
          project.labels.push(req.body.labels);
        }
      }
      await project.save();
      return res.redirect(`back`);

    }else{
      return res.redirect('back');
    }
  }catch(err){
    return res.redirect('back');
  }
};