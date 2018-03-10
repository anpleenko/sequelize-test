'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('users', 'sex', {
      type: Sequelize.STRING,
      defaultValue: '',
    })
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.removeColumn('users', 'sex')
  },
}
