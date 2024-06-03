````markdown
# Project Name

This project uses Knex.js as a SQL query builder for Node.js and MySQL as the database.

## Table of Contents

- [Installation](#installation)
- [Setup](#setup)
- [Migrations](#migrations)
- [Seeding](#seeding)
- [Usage](#usage)
- [License](#license)

## Installation

1. Install Knex.js:

   ```bash
   npm install knex
   ```

2. Verify the Knex installation:

   ```bash
   npx knex --version
   ```

3. Install MySQL:

   ```bash
   npm install mysql
   ```

## Setup

1. Initialize Knex in your project. This will create a `knexfile.js` in your project root:

   ```bash
   knex init
   ```

2. Configure your `knexfile.js` to connect to your MySQL database. Update the `development` configuration (or the relevant environment):

   ```javascript
   module.exports = {
     development: {
       client: 'mysql',
       connection: {
         host: '127.0.0.1',
         user: 'your-database-user',
         password: 'your-database-password',
         database: 'your-database-name'
       }
     },
     // Other environments (staging, production) can be configured similarly
   };
   ```

## Migrations

1. Create a migration file for the `tbl_person` table:

   ```bash
   knex migrate:make tbl_person
   ```

2. Create a migration file for the `tbl_favourite` table:

   ```bash
   knex migrate:make tbl_favourite
   ```

3. Define the schema for the `tbl_person` table in the generated migration file (located in the `migrations` directory):

   ```javascript
   exports.up = function(knex) {
     return knex.schema.createTable('tbl_person', function(table) {
       table.increments('id').primary();
       table.string('name');
       table.integer('age');
       table.timestamps(true, true);
     });
   };

   exports.down = function(knex) {
     return knex.schema.dropTable('tbl_person');
   };
   ```

4. Define the schema for the `tbl_favourite` table in the generated migration file:

   ```javascript
   exports.up = function(knex) {
     return knex.schema.createTable('tbl_favourite', function(table) {
       table.increments('id').primary();
       table.integer('person_id').unsigned().references('id').inTable('tbl_person');
       table.string('favourite_item');
       table.timestamps(true, true);
     });
   };

   exports.down = function(knex) {
     return knex.schema.dropTable('tbl_favourite');
   };
   ```

5. Run the migrations to create the tables in the database:

   ```bash
   knex migrate:latest
   ```

## Seeding

1. Create a seed file for the `tbl_person` table (optional step if you already have seed files):

   ```bash
   knex seed:make tbl_person
   ```

2. Define the seed data in the generated seed file (located in the `seeds` directory):

   ```javascript
   exports.seed = function(knex) {
     // Deletes ALL existing entries
     return knex('tbl_person').del()
       .then(function () {
         // Inserts seed entries
         return knex('tbl_person').insert([
           {id: 1, name: 'John Doe', age: 30},
           {id: 2, name: 'Jane Doe', age: 25},
           {id: 3, name: 'Jack Doe', age: 35}
         ]);
       });
   };
   ```

3. Run the specific seed file to populate the `tbl_person` table with initial data:

   ```bash
   knex seed:run --specific=tbl_person.js
   ```

## Usage

After setting up the database and running the migrations and seeds, you can start building your application using Knex.js to interact with your MySQL database.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
````
