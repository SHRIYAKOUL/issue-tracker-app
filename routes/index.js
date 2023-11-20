/*
    This file sets up the main routing for our application. It imports the necessary modules, 
    creates a router, and defines the route for the home page.
*/
const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeControllers');

console.log('router loaded');
// Define route for home page
router.get('/',homeController.home);
// Use project router for all routes starting with '/project'
router.use('/project',require('./project'));
module.exports = router; //Export router
