const express = require('express');
const projects = require('./project-model');
const router = express.Router();

router.get('/', (req, res)=>{
    projects.find()
    .then(project =>{
        res.status(200).json(project)
    })
    .catch(err =>{
        res.status(500).json({
            message: 'Failed to get project data'
        })
    })
})

router.get('/:id', (req, res)=>{
    const { id } = req.params;
    projects.findById(id)
    .then(project => {
        project ? res.json(project) : res.status(404).json({
            message: `Could't find project with given id.`
        })
    })
})

router.post('/', (req, res)=>{
    
})

router.put('/', (req, res)=>{
    
})

router.delete('/', (req, res)=>{
    
})

module.exports = router;