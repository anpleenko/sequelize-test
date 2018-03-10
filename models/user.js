const Hashids = require('hashids')
const hashids = new Hashids(process.env.APP_SECRET_SALT, process.env.APP_HASH_LENGTH)

module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    'user',
    {
      firstName: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
        },
      },
      lastName: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
        },
      },
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: true,
          notEmpty: true,
        },
      },
      sex: {
        type: DataTypes.STRING,
        defaultValue: '',
      },
      slug: {
        type: DataTypes.STRING,
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {}
  )

  // user.beforeCreate(function(user, options) {
  //   console.log(user.dataValues);
  //   return user.slug = hashids.encode(user.id)
  // })

  user.afterCreate(function(user, options) {
    user.slug = hashids.encode(user.dataValues.id)
    return user.save()
  })

  user.associate = function(models) {
    user.hasMany(models.task, { foreignKey: 'user_id' })
    user.hasMany(models.work, { foreignKey: 'user_id' })
    // associations can be defined here
  }

  return user
}
