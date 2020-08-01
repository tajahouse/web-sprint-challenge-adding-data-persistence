exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, project_name: 'Become a good developer', project_description: 'Work hard and never give up', project_completed: false},
        {id: 2, project_name: 'Thank my TL', project_description: 'Make sure my TL understands how appreciative I am for all of his help', project_completed: false},
        {id: 3, project_name: 'Give back to my community', project_description: 'Give where giving is needed', project_completed: false}
      ]);
    });
};
