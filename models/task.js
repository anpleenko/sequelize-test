'use strict'
module.exports = (sequelize, DataTypes) => {
  var task = sequelize.define(
    'task',
    {
      title: DataTypes.STRING,
      user_id: DataTypes.INTEGER,
    },
    {}
  )

  task.associate = function(models) {
    // associations can be defined here
    task.belongsTo(models.user, {foreignKey: 'user_id'})
  }
  return task
}
