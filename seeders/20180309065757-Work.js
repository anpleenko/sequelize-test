const faker = require('faker')
const arrayByCount = require('../helpers/arrayByCount')

const users = arrayByCount(100).map(() => ({
  title: faker.name.firstName(),
  createdAt: new Date(),
  updatedAt: new Date(),
  user_id: faker.random.number(100)
}))

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Works', users, {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Works', null, {})
  },
}
