/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
   return knex.schema.hasColumn('usuario', 'pais_id').then(function(exists) {
       if (!exists) {
           return knex.schema.alterTable('usuario', function(table) {
               table.integer('pais_id').unsigned().references('id').inTable('pais').onDelete('SET NULL');
           });
       }
       return null;
   });
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.hasColumn('usuario', 'pais_id').then(function(exists) {
        if (exists) {
            return knex.schema.alterTable('usuario', function(table) { table.dropColumn('pais_id'); });
        }
        return null;
    });
  
};
