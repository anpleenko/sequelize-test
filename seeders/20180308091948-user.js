const faker = require('faker')
const arrayByCount = require('../helpers/arrayByCount')
const randomEnum = require('../helpers/randomEnum')
const Hashids = require('hashids')

const hashids = new Hashids(process.env.NODE_HASHIDS_SALT, process.env.NODE_HASHIDS_LENGTH)

const users = arrayByCount(100).map(e => ({
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  email: faker.internet.email(),
  createdAt: new Date(),
  updatedAt: new Date(),
  sex: randomEnum(['male', 'female']),
  slug: hashids.encode(e),
}))

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', users, {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {})
  },
}
