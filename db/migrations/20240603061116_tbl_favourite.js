const knex = require("../db")

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
module.exports.up = async (knex) => {
    const exists = await knex.schema.hasTable("tbl_favourite");
    if (!exists) {
      await knex.schema
        .createTable("tbl_favourite", (table) => {
          table.increments("favouriteId").primary();
          table.string("game");
          table.string("book");
          table.string("movie");
          table.string("series");
          table.string("anime");
          table.timestamp('created_at').defaultTo(knex.fn.now())
          table.timestamp('updated_at').defaultTo(knex.fn.now())
          table.boolean("isDeleted").defaultTo(false);
          table
            .integer("personId")
            .unsigned()
            .references("personId")
            .inTable("tbl_person")
            .onDelete("CASCADE"); 
        }
      )
        .then(() => {
          console.log("tbl_favourite created successfully");
        })
        .catch((err) => console.log(err));
    }
  };

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

module.exports.down = async (knex) => {
    await knex.schema.dropTableIfExists("tbl_favourite");
};