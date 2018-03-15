module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('users', 'sex', {
      type: Sequelize.ENUM,
      defaultValue: '',
      values: ['male', 'female', ''],
    })
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.removeColumn('users', 'sex')
  },
}
