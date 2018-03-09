module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {}
  )

  User.associate = function(models) {
    User.hasMany(models.Task, {foreignKey: 'user_id'})
    User.hasMany(models.Work, {foreignKey: 'user_id'})
    // associations can be defined here
  }

  return User
}
