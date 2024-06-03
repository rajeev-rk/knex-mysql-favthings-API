const knex = require("../db")

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

module.exports.up = async (knex) => {
    const exists = await knex.schema.hasTable("tbl_person");
    if (!exists) {
      await knex.schema
        .createTable("tbl_person", (table) => {
          table.increments("personId").primary();
          table.string("firstName");
          table.string("middleName");
          table.string("lastName");
          table.string("email").unique(); 
          table.string("address");
          table.timestamp('created_at').defaultTo(knex.fn.now())
          table.timestamp('updated_at').defaultTo(knex.fn.now())
          table.boolean("isDeleted").defaultTo(false);
        })
        .then(() => {
          console.log("tbl_person created successfully");
        })
        .catch((err) => console.log(err));
    }
  };

  /**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
  
  module.exports.down = async (knex) => {
    await knex.schema.dropTableIfExists("tbl_person");
  };
  
