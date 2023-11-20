/*
    This file sets up the routing for project-related actions.
    It imports the necessary modules, creates a router, and 
    defines routes for creating a project, viewing a project, and 
    creating an issue for a project.
*/

const express = require('express');
const router = express.Router();
const projectsController = require('../controllers/projectsController');

// Define route for creating a project
router.post('/create',projectsController.create);
// Define route for viewing a project
router.get('/:id',projectsController.project);
// Define route for creating an issue for a project
router.post('/:id',projectsController.createIssue);

module.exports = router; // Export router
