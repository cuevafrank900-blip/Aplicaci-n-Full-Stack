/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.hasTable('pais').then(function(exists) {
        if (!exists) {
            return knex.schema.createTable('pais', function(table) {
                table.increments('id').primary();
                table.string('nombre', 20).notNullable();
                table.string('codigo', 10).notNullable();
                table.boolean('estado').defaultTo(true);
                table.timestamp('fecha_creado', true);
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

    return knex.schema.dropTableIfExists("pais");

};