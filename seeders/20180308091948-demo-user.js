const faker = require('faker')
const arrayByCount = require('../helpers/arrayByCount')

const users = arrayByCount(100).map(() => ({
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  email: faker.internet.email(),
  createdAt: new Date(),
  updatedAt: new Date(),
}))

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', users, {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {})
  },
}
