exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table){
    table.increments();  // ID column
    table.string('username');
    table.string('password');
    table.string('email');    
  })
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
