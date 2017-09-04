exports.up = function(knex, Promise) {
  return knex.schema.createTable('cards', function(table){
    table.increments();  // ID column
    table.integer('creator_id');
    table.integer('stack_id');
    table.string('side1');
    table.string('side2');
    table.string('side3');
    table.string('side4');
    table.string('hint');
  })
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('cards');
};
