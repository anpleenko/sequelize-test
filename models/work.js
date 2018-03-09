module.exports = (sequelize, DataTypes) => {
  const work = sequelize.define(
    'work',
    {
      title: DataTypes.STRING,
    },
    {}
  )
  work.associate = function(models) {
    // associations can be defined here
    work.belongsTo(models.user, {foreignKey: 'user_id'})
  }
  return work
}
