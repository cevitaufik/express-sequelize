'use strict'

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

    return queryInterface.bulkInsert('roles', [
      {
        ability: 'view',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ability: 'create',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ability: 'update',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ability: 'delete',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
}
