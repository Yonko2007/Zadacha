const express = require('express');
const { getProjects, getProject, createProject, updateProject, deleteProject } = require('../controllers/project.controller');

const router = express