'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Airports', [
      {
        name: "Indira Gandhi International Airport",
        cityId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Kempegowda International Airport Bengaluru",
        cityId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Jaipur International Airport",
        cityId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Hindustan Aeronautics Limited Airport",
        cityId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Safdarjung Airport",
        cityId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Hindon Airport",
        cityId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Chaudhary Charan Singh International Airport",
        cityId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Ludhiana Airport",
        cityId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Shaheed Kartar Singh Sarabha International Airport, Ludhiana",
        cityId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Jayprakash Narayan International Airport, Patna",
        cityId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Pathankot Airport",
        cityId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('Airports', null, {});
  }
};
