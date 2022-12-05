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

    return queryInterface.bulkInsert('users', [{
      username: 'jhondoe',
      firstName: 'John',
      lastName: 'Doe',
      email: 'example@example.com',
      password: '$2b$11$ok4nuY4VWiR47Nx1QQenzeV7YYn0QoYxAlUoZ55pmMW2KV6VsSmh6', // password
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('users', null, {})
  }
}
