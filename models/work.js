module.exports = (sequelize, DataTypes) => {
  const Work = sequelize.define(
    'Work',
    {
      title: DataTypes.STRING,
    },
    {}
  )
  Work.associate = function(models) {
    // associations can be defined here
    Work.belongsTo(models.User, {foreignKey: 'user_id'})
  }
  return Work
}
