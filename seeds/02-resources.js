
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {id: 1, resource_name: 'computer', resource_description: 'Something to develop on?'},
        {id: 2, resource_name: 'gratitude', resource_description: 'born with it'},
        {id: 3, money: 'The stuff that I need to have because I have kids and they all eat a lot'}
      ]);
    });
};
