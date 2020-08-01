const db = require('../data/db-config.js')


const find = () =>{
    return db('projects')
}

const findById = () =>{
    return db('projects').where({ id })
}

const add = (projectData) =>{
    return db('projects').insert(projectData)
}

const update = (changes, id) =>{
    return db('projects').where({ id }).update(changes)
}

const remove = (id) =>{
    return db('projects').where({ id }).del()
}

module.exports = {
    find,
    findById,
    add,
    update,
    remove,
}