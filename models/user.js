module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    'user',
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {}
  )

  user.associate = function(models) {
    user.hasMany(models.task, {foreignKey: 'user_id'})
    user.hasMany(models.work, {foreignKey: 'user_id'})
    // associations can be defined here
  }

  return user
}
