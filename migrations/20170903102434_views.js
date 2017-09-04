exports.up = function(knex, Promise) {
  return knex.schema.createTable('views', function(table){
    table.increments();  // ID column
    table.integer('user_id');
    table.integer('card_id');
    table.timestamp('start_time').defaultTo(knex.fn.now());
    table.timestamp('end_time').defaultTo(knex.fn.now());
    table.boolean('correct').notNullable().defaultTo(false);
    table.string('hint');
  })
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('views');
};
