
exports.up = function(knex) {
  return knex.schema.createTable('projects', tbl =>{
      tbl.increments('id');
      tbl.text('project_name', 128)
        .notNullable()
        .unique()
      tbl.text('project_description')
      tbl.boolean('project_completed')
        .notNullable()
  })
  .createTable('resources', tbl=>{
      tbl.increments('id')
      tbl.text('resource_name', 128)
        .notNullable()
        .unique()
      tbl.text('resource_description')
  })
  .createTable("tasks", tbl=>{
      tbl.increments('id')
      tbl.text("task_description")
        .notNullable()
      tbl.boolean("task_completed")
        .notNullable()
      tbl.text('notes')
      tbl.integer("projects_id")
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onUpdate('CASCADE')
  })
  .createTable('projects_resources', tbl=>{
      tbl.integer('projects_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onUpdate('CASCADE')
      tbl.integer('resources_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onUpdate('CASCADE')
      tbl.primary(['projects_id', 'resources_id'])
  })
};

exports.down = function(knex) {
  return( knex.schema
        .dropTableIfExsists('projects_resources')
        .dropTableIfExsists('tasks')
        .dropTableIfExsists('resources')
        .dropTableIfExsists('projects')
    )
};
