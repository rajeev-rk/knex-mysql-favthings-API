const knex = require("knex");
const knexFile = require("../knexfile.js");


const d = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  }
console.log("🚀 ~ d:", d)
const environment = process.env.NODE_ENV || "development";

module.exports = knex(knexFile[environment]);