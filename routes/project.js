// Defines routes forhandling project-related actions like viewing
// projects ,creating projects,viewing project issues,and creating 
// issues(not fully implemented in the provided code).

// routes/project.js

const express = require('express');
const router = express.Router();
const projectsController = require('../controllers/projectsController');

router.post('/create',projectsController.create);
router.get('/:id',projectsController.project);
router.post('/:id',projectsController.createIssue);

module.exports = router;
