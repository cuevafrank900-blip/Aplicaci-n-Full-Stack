/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.hasTable('usuario').then(function(exists) {
        if (!exists) {
            return knex.schema.createTable('usuario', function(table) {
                table.increments('id').primary();
                table.string('nombre').notNullable();
                table.string('correo').unique().notNullable();
                table.boolean('estado').defaultTo(true);
                table.timestamp('fecha_creado', true);
                table.date('fecha de nacimiento').nullable();
                table.decimal('balance', 10, 2).nullable();
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
    return knex.schema.dropTableIfExists("usuario")
  
};

