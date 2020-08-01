
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, task_description: 'study as much as I can', task_completed: false, notes: 'I will never complete this task...', project_id: 1},
        {id: 2, task_description: 'think of non-sappy gratitude phrases?', task_completed: false, notes: 'My awkwardness makes this impossible', project_id: 2},
        {id: 3, task_description: 'keep adding to savings account', task_completed: true, notes:"Increase savings contributions bi-yearly", project_id: 3}
      ]);
    });
};
