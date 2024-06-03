/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {

  const initialData = [
    {
      "personId": 1,
      "firstName": "John",
      "middleName": "A",
      "lastName": "Doe",
      "email": "john.doe@example.com",
      "address": "123 Main St, Springfield, IL",
      "isDeleted": false
    },
    {
      "personId": 2,
      "firstName": "Jane",
      "middleName": "B",
      "lastName": "Smith",
      "email": "jane.smith@example.com",
      "address": "456 Elm St, Springfield, IL",
      "isDeleted": false
    },
    {
      "personId": 3,
      "firstName": "Robert",
      "middleName": "C",
      "lastName": "Johnson",
      "email": "robert.johnson@example.com",
      "address": "789 Oak St, Springfield, IL",
      "isDeleted": false
    },
    {
      "personId": 4,
      "firstName": "Emily",
      "middleName": "D",
      "lastName": "Davis",
      "email": "emily.davis@example.com",
      "address": "321 Pine St, Springfield, IL",
      "isDeleted": false
    },
    {
      "personId": 5,
      "firstName": "Michael",
      "middleName": "E",
      "lastName": "Brown",
      "email": "michael.brown@example.com",
      "address": "654 Cedar St, Springfield, IL",
      "isDeleted": false
    },
    {
      "personId": 6,
      "firstName": "Sarah",
      "middleName": "F",
      "lastName": "Miller",
      "email": "sarah.miller@example.com",
      "address": "987 Birch St, Springfield, IL",
      "isDeleted": false
    },
    {
      "personId": 7,
      "firstName": "David",
      "middleName": "G",
      "lastName": "Wilson",
      "email": "david.wilson@example.com",
      "address": "246 Maple St, Springfield, IL",
      "isDeleted": false
    },
    {
      "personId": 8,
      "firstName": "Laura",
      "middleName": "H",
      "lastName": "Moore",
      "email": "laura.moore@example.com",
      "address": "135 Walnut St, Springfield, IL",
      "isDeleted": false
    },
    {
      "personId": 9,
      "firstName": "James",
      "middleName": "I",
      "lastName": "Taylor",
      "email": "james.taylor@example.com",
      "address": "864 Chestnut St, Springfield, IL",
      "isDeleted": false
    },
    {
      "personId": 10,
      "firstName": "Olivia",
      "middleName": "J",
      "lastName": "Anderson",
      "email": "olivia.anderson@example.com",
      "address": "753 Spruce St, Springfield, IL",
      "isDeleted": false
    },
    {
      "personId": 11,
      "firstName": "Daniel",
      "middleName": "K",
      "lastName": "Thomas",
      "email": "daniel.thomas@example.com",
      "address": "642 Willow St, Springfield, IL",
      "isDeleted": false
    },
    {
      "personId": 12,
      "firstName": "Sophia",
      "middleName": "L",
      "lastName": "Jackson",
      "email": "sophia.jackson@example.com",
      "address": "531 Hickory St, Springfield, IL",
      "isDeleted": false
    }
  ]
  
  // Deletes ALL existing entries
  await knex('tbl_person').del()
  await knex('tbl_person').insert(initialData);
};
