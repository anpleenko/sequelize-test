'use strict'
module.exports = (sequelize, DataTypes) => {
  var Task = sequelize.define(
    'Task',
    {
      title: DataTypes.STRING,
      user_id: DataTypes.INTEGER,
    },
    {}
  )

  Task.associate = function(models) {
    // associations can be defined here
    Task.belongsTo(models.User, {foreignKey: 'user_id'})
  }
  return Task
}
