const express = require('express');

const ProjectsRouter = require('./api/projects-router');
const ResourcesRouter = require("./api/resources-router");
const TasksRouter = require('./api/tasks-router');
const { ServerResponse } = require('http');
const server = express();
server.use(express.json())

server.use(logger)

server.use('/api/projects', ProjectsRouter)
server.use('/api/resources', ResourcesRouter)
server.use('/api/tasks', TasksRouter)

server.get('/', (req, res)=>{
    res.send(`<h2>You've got this Taja!</h2>`)
})

function logger(req, res, next) {
    console.log(`${req.method} ${req.originalUrl} at ${new Date().toString()}`);
    next();
  }

module.exports = server;